import { useState, useEffect, useRef, type ReactNode } from 'react';

interface LazySectionProps {
  id: string;
  children: ReactNode;
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
  className = '',
  placeholderMinHeight = 320,
  rootMargin = '120px',
}: LazySectionProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      aria-label={id}
    >
      {inView ? children : <div className="lazy-placeholder" style={{ minHeight: placeholderMinHeight }} />}
    </section>
  );
}
