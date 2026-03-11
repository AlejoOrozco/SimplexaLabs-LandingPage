import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  children: ReactNode;
}

/**
 * Reusable button or link styled as CTA.
 * Use href for navigation (renders <a>), omit for <button>.
 * Pass className to override or add styles for a single button (e.g. className="hero__cta--special").
 */
export function Button({
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  children,
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn--primary' : 'btn--secondary';
  const fullClass = [baseClass, variantClass, className].filter(Boolean).join(' ');

  if (href !== undefined) {
    return (
      <a href={href} className={fullClass}>
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
