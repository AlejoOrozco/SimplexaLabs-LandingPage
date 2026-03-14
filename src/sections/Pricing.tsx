import { useState } from 'react';
import { PLAN_COLORS, PLANS_SIN_WEB, PLANS_CON_WEB } from '@/constants/pricing';
import { WHATSAPP_URL } from '@/constants/contact';
import { PricingCard } from '../components';
import { cn } from '@/lib/utils';

type TabKey = 'sin-web' | 'con-web';

export function Pricing() {
  const [tab, setTab] = useState<TabKey>('sin-web');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const plans = tab === 'con-web' ? PLANS_CON_WEB : PLANS_SIN_WEB;

  return (
    <div className="section__inner pricing-section__inner">
      <h2 className="section__title">Planes diseñados para crecer contigo</h2>
      <p className="section__subtitle">
        Empieza simple, automatiza lo esencial y escala cuando tu negocio lo necesite.
        Todos los planes incluyen contrato anual con soporte durante la vigencia.
      </p>

      <div className="pricing-tabs" role="tablist" aria-label="Tipo de plan">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'sin-web'}
          aria-controls="pricing-grid"
          id="tab-sin-web"
          className={cn('pricing-tab', tab === 'sin-web' && 'pricing-tab--active')}
          onClick={() => setTab('sin-web')}
        >
          Sin website
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'con-web'}
          aria-controls="pricing-grid"
          id="tab-con-web"
          className={cn('pricing-tab', tab === 'con-web' && 'pricing-tab--active')}
          onClick={() => setTab('con-web')}
        >
          Con website
        </button>
      </div>

      <div id="pricing-grid" role="tabpanel" aria-labelledby={tab === 'sin-web' ? 'tab-sin-web' : 'tab-con-web'} className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            tagline={plan.tagline}
            priceNote={plan.priceNote}
            setupFee={plan.setupFee}
            features={plan.features}
            result={plan.result}
            cta={plan.cta}
            ctaHref={plan.ctaHref}
            popular={plan.popular}
            color={PLAN_COLORS[plan.id.replace(/-web$/, '')] ?? PLAN_COLORS[plan.id] ?? '#2563eb'}
            dimmed={hoveredId !== null && hoveredId !== plan.id}
            onHoverStart={() => setHoveredId(plan.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
      </div>

      <p className="pricing-legal">
        Todos los planes incluyen contrato anual con renovación. El soporte técnico está vigente durante la duración del contrato activo. Precios en USD. Para Colombia: equivalente aproximado en COP al momento de cotización.
      </p>

      <p className="pricing-cta-note">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          ¿No sabes cuál elegir? Habla con nosotros →
        </a>
      </p>
    </div>
  );
}
