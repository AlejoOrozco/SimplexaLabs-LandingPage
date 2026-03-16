/**
 * Pricing section & pricing card types.
 */

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  tagline: string;
  /** Optional line under price (e.g. "≈ $820K COP/mes") */
  priceNote?: string;
  /** Optional setup fee (e.g. "Setup fee único: $497 USD") */
  setupFee?: string;
  features: string[];
  result: string;
  cta: string;
  ctaHref: string;
  /** When set, CTA opens schedule modal instead of navigating to ctaHref */
  onCtaClick?: (planName: string) => void;
  popular?: boolean;
  /** Accent color for glow/shimmer (hex) */
  color?: string;
  dimmed?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}
