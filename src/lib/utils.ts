import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names with Tailwind conflict resolution.
 * Use for conditional/override styles so later classes win (e.g. px-2 px-4 → px-4).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
