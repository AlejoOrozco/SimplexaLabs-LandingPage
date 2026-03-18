import { useState } from 'react';
import {
  PLAN_COLORS_PDF,
  getPricingPlansPdf2026,
  type MarketingMode,
  type WebsiteMode,
} from '@/constants/pricing';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { PricingCard } from '../components';
import { cn } from '@/lib/utils';

export function Pricing() {
  const [websiteTab, setWebsiteTab] = useState<WebsiteMode>('sin-web');
  const [marketingTab, setMarketingTab] = useState<MarketingMode>('sin-marketing');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { openScheduleModal } = useScheduleMeeting();

  const plans = getPricingPlansPdf2026(websiteTab, marketingTab);
  const websiteLabel = websiteTab === 'con-web' ? '(Con web)' : '(Sin web)';
  const marketingLabel = marketingTab === 'con-marketing' ? '(Con marketing)' : '(Sin marketing)';

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
          aria-selected={websiteTab === 'sin-web'}
          aria-controls="pricing-grid"
          id="tab-sin-web"
          className={cn('pricing-tab', websiteTab === 'sin-web' && 'pricing-tab--active')}
          onClick={() => setWebsiteTab('sin-web')}
        >
          Sin website
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={websiteTab === 'con-web'}
          aria-controls="pricing-grid"
          id="tab-con-web"
          className={cn('pricing-tab', websiteTab === 'con-web' && 'pricing-tab--active')}
          onClick={() => setWebsiteTab('con-web')}
        >
          Con website
        </button>
      </div>

      <div className="pricing-tabs" role="tablist" aria-label="Marketing">
        <button
          type="button"
          role="tab"
          aria-selected={marketingTab === 'sin-marketing'}
          aria-controls="pricing-grid"
          id="tab-sin-marketing"
          className={cn('pricing-tab', marketingTab === 'sin-marketing' && 'pricing-tab--active')}
          onClick={() => setMarketingTab('sin-marketing')}
        >
          Sin marketing
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={marketingTab === 'con-marketing'}
          aria-controls="pricing-grid"
          id="tab-con-marketing"
          className={cn('pricing-tab', marketingTab === 'con-marketing' && 'pricing-tab--active')}
          onClick={() => setMarketingTab('con-marketing')}
        >
          Con marketing
        </button>
      </div>

      <div
        id="pricing-grid"
        role="tabpanel"
        aria-labelledby={websiteTab === 'sin-web' ? 'tab-sin-web' : 'tab-con-web'}
        className="pricing-grid"
      >
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
            onCtaClick={(planName) => openScheduleModal(`${planName} ${websiteLabel} ${marketingLabel}`)}
            popular={plan.popular}
            color={PLAN_COLORS_PDF[plan.id] ?? '#2563eb'}
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
        <button
          type="button"
          className="pricing-cta-link"
          onClick={() => openScheduleModal('Planes')}
        >
          ¿No sabes cuál elegir? Habla con nosotros →
        </button>
      </p>
    </div>
  );
}
