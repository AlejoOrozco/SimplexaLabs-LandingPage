import type { ReactNode } from 'react';

interface CardProps {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable card for benefits, use cases, feature lists, etc.
 * Use title + text for simple blocks, or title + children for custom content.
 * Design can be refined in this single component later.
 */
export function Card({ title, text, children, className = '' }: CardProps) {
  const content = children ?? (text != null ? <p className="card__text">{text}</p> : null);
  return (
    <div className={`card ${className}`.trim()}>
      {title != null && <h3 className="card__title">{title}</h3>}
      {content}
    </div>
  );
}
