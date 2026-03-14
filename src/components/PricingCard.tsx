import type { PricingCardProps } from '@/types';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui';

const TILT_MAX = 9;
const TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

export function PricingCard({
  name,
  price,
  period,
  tagline,
  priceNote,
  setupFee,
  features,
  result,
  cta,
  ctaHref,
  popular = false,
  color = '#2563eb',
  dimmed = false,
  onHoverStart,
  onHoverEnd,
}: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);
  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd?.();
  };

  return (
    <motion.article
      ref={cardRef}
      aria-label={`Plan ${name}`}
      animate={{
        scale: dimmed ? 0.96 : 1,
        opacity: dimmed ? 0.5 : 1,
      }}
      className={cn(
        'pricing-card',
        popular && 'pricing-card--popular'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {/* Static accent tint */}
      <div
        aria-hidden="true"
        className="pricing-card__accent-tint"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${color}14, transparent 65%)`,
        }}
      />
      {/* Hover glow */}
      <motion.div
        aria-hidden="true"
        className="pricing-card__accent-glow"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${color}2e, transparent 65%)`,
        }}
      />
      {/* Shimmer sweep */}
      <div aria-hidden="true" className="pricing-card__shimmer" />

      {popular && <span className="pricing-card__badge">Más popular</span>}
      <h3 className="pricing-card__name">{name}</h3>
      <p className="pricing-card__price">
        {price}<span className="pricing-card__period">{period}</span>
      </p>
      {priceNote && <p className="pricing-card__price-note">{priceNote}</p>}
      {setupFee && <p className="pricing-card__setup-fee">{setupFee}</p>}
      <p className="pricing-card__tagline">{tagline}</p>
      <ul className="list--bullets pricing-card__features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="pricing-card__result">{result}</p>
      <Button
        href={ctaHref}
        variant="primary"
        className="pricing-card__cta"
      >
        {cta}
      </Button>
      {/* Accent bottom line on hover */}
      <div
        aria-hidden="true"
        className="pricing-card__accent-line"
        style={{
          background: `linear-gradient(to right, ${color}80, transparent)`,
        }}
      />
    </motion.article>
  );
}
