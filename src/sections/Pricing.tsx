import { useState } from 'react';
import { PLAN_COLORS, PLANS } from '@/constants/pricing';
import { PricingCard } from '../components';

export function Pricing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="section__inner pricing-section__inner">
      <h2 className="section__title">Planes diseñados para crecer contigo</h2>
      <p className="section__subtitle">
        Empieza simple, automatiza más y escala cuando tu negocio lo necesite.
      </p>
      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            tagline={plan.tagline}
            features={plan.features}
            result={plan.result}
            cta={plan.cta}
            ctaHref={plan.ctaHref}
            popular={plan.popular}
            color={PLAN_COLORS[plan.id] ?? '#2563eb'}
            dimmed={hoveredId !== null && hoveredId !== plan.id}
            onHoverStart={() => setHoveredId(plan.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
}
