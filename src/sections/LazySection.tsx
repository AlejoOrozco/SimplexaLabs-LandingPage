import { useRef, type ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks';

interface LazySectionProps {
  id: string;
  children: ReactNode;
  /** Accessible name for the section (e.g. "Preguntas frecuentes"). Falls back to id if omitted. */
  ariaLabel?: string;
  className?: string;
  placeholderMinHeight?: number;
  rootMargin?: string;
}

/**
 * Renders children only when the section enters the viewport.
 * Preserves layout with a placeholder so scroll position stays correct.
 */
export function LazySection({
  id,
  children,
  ariaLabel,
  className = '',
  placeholderMinHeight = 320,
  rootMargin = '120px',
}: LazySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useIntersectionObserver(ref, {
    rootMargin,
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      aria-label={ariaLabel ?? id}
    >
      {inView ? (
        children
      ) : (
        <div
          className="lazy-placeholder"
          style={{ minHeight: placeholderMinHeight }}
        />
      )}
    </section>
  );
}
