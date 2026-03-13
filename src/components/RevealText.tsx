/**
 * RevealText — cinematic blur + scale text reveal, triggered once on scroll.
 * Splits content into lines/words, each word animates in with staggered delay.
 */
import { useRef, useEffect, useState, type ReactNode } from 'react';

interface RevealTextProps {
  /** Array of lines; each line is a string that will be split into words */
  lines: string[];
  className?: string;
  /** Base stagger per word in seconds */
  stagger?: number;
  /** Initial delay before the first word */
  startDelay?: number;
  /** Tag to render the container as */
  as?: 'div' | 'h2' | 'p';
  children?: ReactNode;
}

export function RevealText({
  lines,
  className,
  stagger = 0.08,
  startDelay = 0.15,
  as: Tag = 'div',
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let wordIndex = 0;

  return (
    <Tag
      ref={ref as never}
      className={`reveal-text ${active ? 'reveal-text--active' : ''} ${className ?? ''}`.trim()}
    >
      {lines.map((line, li) => (
        <span key={li} className="reveal-text__line">
          {line.split(' ').map((word, wi) => {
            const delay = startDelay + wordIndex * stagger;
            wordIndex++;
            return (
              <span
                key={`${li}-${wi}`}
                className="reveal-text__word"
                style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
