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
const MEETINGS_API_URL = import.meta.env.VITE_MEETINGS_API_URL;
const MAX_MEETING_UPLOADS_PER_DEVICE = 3;

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

export async function hasMeetingForEmail(guestEmail: string): Promise<boolean> {
  const normalized = guestEmail.trim().toLowerCase();
  const q = query(
    collection(db, MEETINGS_COLLECTION),
    where('guestEmail', '==', normalized)
  );
  const snap = await getDocs(q);
  return !snap.empty;
}

function getLocalSubmissionCount(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMITTED);
    if (!raw) return 0;
    const n = Number.parseInt(raw, 10);
    if (Number.isNaN(n)) return 0;
    return Math.max(0, n);
  } catch {
    return 0;
  }
}

export function hasSubmittedFromThisDevice(): boolean {
  return getLocalSubmissionCount() >= MAX_MEETING_UPLOADS_PER_DEVICE;
}

export function markSubmittedFromThisDevice(): void {
  try {
    const current = getLocalSubmissionCount();
    const next = Math.min(MAX_MEETING_UPLOADS_PER_DEVICE, current + 1);
    localStorage.setItem(STORAGE_KEY_SUBMITTED, String(next));
  } catch {
    // ignore
  }
}

/**
 * Core Firestore write used as a fallback when no external API is configured.
 */
async function createMeetingDirectToFirestore(payload: MeetingPayload): Promise<string> {
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

/**
 * Create a new meeting.
 * - If VITE_MEETINGS_API_URL is set, send the payload to that API (recommended for production).
 * - Otherwise, fall back to writing directly to Firestore from the client.
 */
export async function createMeeting(payload: MeetingPayload): Promise<string> {
  const defaultIds = getDefaultAssignedUserIds();
  const assignedToUserIds =
    payload.assignedToUserIds && payload.assignedToUserIds.length > 0
      ? payload.assignedToUserIds
      : defaultIds.length > 0
        ? defaultIds
        : [];

  if (MEETINGS_API_URL) {
    const body = {
      ...payload,
      guestEmail: payload.guestEmail.trim(),
      guestName: payload.guestName.trim(),
      guestPhone: String(payload.guestPhone ?? '').trim(),
      notes: payload.notes.trim(),
      scheduledAt: payload.scheduledAt.toISOString(),
      duration: payload.duration,
      plan: payload.plan ?? null,
      assignedToUserIds,
    };

    const res = await fetch(MEETINGS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      let message = 'No se pudo agendar. Intenta de nuevo.';
      try {
        const data = await res.json();
        if (data?.error) message = data.error;
      } catch {
        // ignore JSON parse errors
      }
      throw new Error(message);
    }

    const data = await res.json().catch(() => ({}));
    return data.id ?? '';
  }

  // Fallback: direct Firestore write (useful for local/dev)
  return createMeetingDirectToFirestore({ ...payload, assignedToUserIds });
}
