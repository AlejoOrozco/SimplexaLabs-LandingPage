import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable card for benefits, use cases, feature lists, etc.
 * Use title + text for simple blocks, or title + children for custom content.
 */
export function Card({ title, text, children, className }: CardProps) {
  const content = children ?? (text != null ? <p className="card__text">{text}</p> : null);
  return (
    <div className={cn('card', className)}>
      {title != null && <h3 className="card__title">{title}</h3>}
      {content}
    </div>
  );
}
