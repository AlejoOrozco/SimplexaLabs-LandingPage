import { Button } from './Button';

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
}

/**
 * Card for a single pricing plan. Structure is fixed so design can be
 * refined in this component later (badge, price style, CTA, etc.).
 */
export function PricingCard({
  name,
  price,
  period,
  tagline,
  features,
  result,
  cta,
  ctaHref,
  popular = false,
}: PricingCardProps) {
  return (
    <article
      className={`pricing-card ${popular ? 'pricing-card--popular' : ''}`}
      aria-label={`Plan ${name}`}
    >
      {popular && <span className="pricing-card__badge">Más popular</span>}
      <h3 className="pricing-card__name">{name}</h3>
      <p className="pricing-card__price">
        {price}<span className="pricing-card__period">{period}</span>
      </p>
      <p className="pricing-card__tagline">{tagline}</p>
      <ul className="list--bullets pricing-card__features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="pricing-card__result">{result}</p>
      <Button href={ctaHref} variant="primary" className="pricing-card__cta">
        {cta}
      </Button>
    </article>
  );
}
