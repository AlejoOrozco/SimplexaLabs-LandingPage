import { useState, useEffect, type RefObject } from 'react';

export interface UseIntersectionObserverOptions {
  /** Margin around the root (e.g. "120px" to trigger before fully in view). */
  rootMargin?: string;
  /** Ratio of visibility (0–1) to trigger. 0 = any pixel visible. */
  threshold?: number;
  /** When true, isIntersecting stays true after first intersection (default: true). */
  triggerOnce?: boolean;
}

/**
 * Returns whether the observed element is (or has been) intersecting the viewport.
 * Use for lazy-rendering: pass triggerOnce: true and render content when true.
 */
export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options?: UseIntersectionObserverOptions
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const {
    rootMargin = '0px',
    threshold = 0,
    triggerOnce = true,
  } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce, ref]);

  return isIntersecting;
}
