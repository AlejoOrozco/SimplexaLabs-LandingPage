/**
 * Pricing section & pricing card types.
 */

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  result: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
  /** Accent color for glow/shimmer (hex) */
  color?: string;
  dimmed?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}
