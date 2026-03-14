import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

/**
 * Reusable button or link styled as CTA.
 * Use href for navigation (renders <a>), omit for <button>.
 * Pass className to override or add styles for a single button.
 */
export function Button({
  variant = 'primary',
  href,
  type = 'button',
  className,
  children,
  target,
  rel,
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn--primary' : 'btn--secondary';
  const fullClass = cn(baseClass, variantClass, className);

  if (href !== undefined) {
    return (
      <a href={href} className={fullClass} target={target} rel={rel}>
        <span className="btn__label">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={fullClass}>
      <span className="btn__label">{children}</span>
    </button>
  );
}
