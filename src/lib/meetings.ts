import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  type Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const MEETINGS_COLLECTION = 'meetings';
const STORAGE_KEY_SUBMITTED = 'simplexalabs_meeting_submitted';

/** User IDs to assign new meetings to (from env; not hardcoded). */
function getDefaultAssignedUserIds(): string[] {
  const brandon = import.meta.env.VITE_BRANDON_FIREBASE_ID;
  const alejandro = import.meta.env.VITE_ALEJANDRO_FIREBASE_ID;
  const ids: string[] = [];
  if (typeof brandon === 'string' && brandon) ids.push(brandon);
  if (typeof alejandro === 'string' && alejandro) ids.push(alejandro);
  return ids.length > 0 ? ids : [];
}

export interface MeetingPayload {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  scheduledAt: Date;
  duration: number;
  notes: string;
  plan?: string;
  /** Prefer this: assign meeting to multiple users. */
  assignedToUserIds?: string[];
  /** @deprecated Use assignedToUserIds. Kept for migration. */
  assignedToUserId?: string;
}

export interface MeetingRecord extends MeetingPayload {
  id: string;
  status: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/** Check if a meeting already exists for this email (any status). */
export async function hasMeetingForEmail(guestEmail: string): Promise<boolean> {
  const normalized = guestEmail.trim().toLowerCase();
  const q = query(
    collection(db, MEETINGS_COLLECTION),
    where('guestEmail', '==', normalized)
  );
  const snap = await getDocs(q);
  return !snap.empty;
}

/** Check if this device already submitted a meeting (localStorage). */
export function hasSubmittedFromThisDevice(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY_SUBMITTED) === '1';
  } catch {
    return false;
  }
}

/** Mark that this device submitted a meeting (call after successful create). */
export function markSubmittedFromThisDevice(): void {
  try {
    localStorage.setItem(STORAGE_KEY_SUBMITTED, '1');
  } catch {
    // ignore
  }
}

/**
 * Create a new meeting document with serverTimestamp for createdAt/updatedAt.
 * Returns the new document id, or throws on error.
 */
export async function createMeeting(payload: MeetingPayload): Promise<string> {
  const normalizedEmail = payload.guestEmail.trim().toLowerCase();
  const defaultIds = getDefaultAssignedUserIds();
  const assignedToUserIds =
    payload.assignedToUserIds && payload.assignedToUserIds.length > 0
      ? payload.assignedToUserIds
      : defaultIds.length > 0
        ? defaultIds
        : [];

  const ref = await addDoc(collection(db, MEETINGS_COLLECTION), {
    assignedToUserIds,
    createdAt: serverTimestamp(),
    duration: payload.duration,
    guestEmail: normalizedEmail,
    guestName: payload.guestName.trim(),
    guestPhone: String(payload.guestPhone).trim(),
    notes: payload.notes.trim(),
    scheduledAt: payload.scheduledAt,
    status: 'pending',
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}
