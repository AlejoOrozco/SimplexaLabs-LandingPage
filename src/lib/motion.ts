/**
 * Centralized motion tokens so animation feel stays consistent across sections.
 */
import type { Transition } from 'motion/react';

type CubicBezier = [number, number, number, number];

export const EASE_OUT_EXPO: CubicBezier = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: CubicBezier = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.16,
} as const;

export const revealTransition: Transition = {
  duration: DURATION.slow,
  ease: EASE_OUT_EXPO,
};

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 140,
  damping: 22,
  mass: 0.6,
};
