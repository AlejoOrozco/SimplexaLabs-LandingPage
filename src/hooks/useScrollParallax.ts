import { type RefObject } from 'react';
import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react';

export interface UseScrollParallaxOptions {
  /** Total travel in pixels across the element's scroll range. */
  distance?: number;
}

/**
 * Maps an element's scroll progress to a vertical parallax offset.
 * Returns a MotionValue suitable for `style={{ y }}`. Yields 0 when the user
 * prefers reduced motion.
 */
export function useScrollParallax(
  ref: RefObject<HTMLElement | null>,
  options?: UseScrollParallaxOptions
): MotionValue<number> {
  const distance = options?.distance ?? 60;
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const still = useTransform(scrollYProgress, () => 0);

  return prefersReducedMotion ? still : parallax;
}
