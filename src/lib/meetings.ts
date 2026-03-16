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

export interface MeetingPayload {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  scheduledAt: Date;
  duration: number;
  notes: string;
  plan?: string;
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
  const ref = await addDoc(collection(db, MEETINGS_COLLECTION), {
    assignedToUserId: payload.assignedToUserId ?? '6lYCxevhTUhqZIMnXsFj86EJgsr2',
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
