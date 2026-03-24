import { useState } from 'react';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { PricingCard } from '../components';
interface ModularPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  priceNote?: string;
  setupFee?: string;
  features: string[];
  result?: string;
  cta: string;
  popular?: boolean;
  color: string;
}

const MODULAR_PLANS: ModularPlan[] = [
  {
    id: 'solo-web',
    name: 'Solo Sitio Web',
    price: 'Desde $497 USD',
    period: '',
    priceNote: 'Pago único · Sin mensualidad',
    tagline: 'Para negocios que ya tienen marketing pero necesitan presencia profesional en Google.',
    features: [
      'Sitio web hasta 6 páginas',
      'Optimizado para móvil y Google',
      'Botón de WhatsApp incluido',
      'Entrega en 10 días hábiles',
    ],
    cta: 'Quiero mi sitio web',
    color: '#2563eb',
  },
  {
    id: 'solo-mkt',
    name: 'Solo Marketing',
    price: '$197 USD',
    period: '/mes',
    priceNote: 'Contrato anual',
    tagline: 'Para negocios que ya tienen sitio web pero necesitan contenido constante en redes.',
    features: [
      '30 piezas de contenido por mes',
      'Instagram, Facebook y Stories',
      'Calendario mensual entregado el día 5',
      'Lo publicamos o te lo entregamos listo',
    ],
    cta: 'Quiero el marketing',
    color: '#7c3aed',
  },
  {
    id: 'solo-auto',
    name: 'Solo Automatizaciones',
    price: '$247 USD',
    period: '/mes',
    priceNote: 'Contrato anual',
    setupFee: '+ $297 USD configuración',
    tagline: 'Para negocios que ya tienen presencia pero pierden leads por falta de respuesta rápida.',
    features: [
      'Agente de IA en WhatsApp e Instagram',
      'Agendamiento automático',
      'Seguimiento automático de leads',
      'Reporte mensual',
    ],
    cta: 'Quiero las automatizaciones',
    color: '#0d9488',
  },
  {
    id: 'sistema-completo',
    name: 'Sistema Completo',
    price: '$377 USD',
    period: '/mes',
    priceNote: '(antes $597)',
    setupFee: '+ $497 USD configuración',
    tagline: 'Para negocios que quieren todo funcionando desde el primer mes.',
    features: [
      'Sitio web + Marketing IA + Automatizaciones',
      'Todo construido y operado por nosotros',
      'Precio bloqueado de por vida',
    ],
    result: '⚠️ Solo quedan 4 cupos del Programa Fundador',
    cta: 'Quiero el sistema completo',
    popular: true,
    color: '#5b5ef4',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Completo',
    price: '$497 USD',
    period: '/mes',
    priceNote: 'Contrato anual',
    setupFee: '+ $697 USD configuración',
    tagline: 'Para tiendas online que quieren vender más sin hacer más trabajo manual.',
    features: [
      'Tienda online + Agente IA + Marketing de productos + Automatizaciones',
      'Hasta 50 productos cargados desde el día 1',
      'Recuperación automática de carritos abandonados',
    ],
    cta: 'Quiero esto para mi tienda',
    color: '#e11d48',
  },
];

export function Pricing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { openScheduleModal } = useScheduleMeeting();

  return (
    <div className="section__inner pricing-section__inner" id="modular-packages">
      <h2 className="section__title">Elige tu punto de partida</h2>
      <p className="section__subtitle">
        Contratos anuales con configuración incluida según el plan. Precios en USD.
      </p>

      <div id="pricing-grid" className="pricing-grid pricing-grid--modular">
        {MODULAR_PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            id={plan.id === 'solo-web' ? 'plan-sitio-web' : undefined}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            tagline={plan.tagline}
            priceNote={plan.priceNote}
            setupFee={plan.setupFee}
            features={plan.features}
            result={plan.result}
            cta={plan.cta}
            ctaHref="#"
            onCtaClick={(planName) => openScheduleModal(planName)}
            popular={plan.popular}
            color={plan.color}
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
          onClick={() => openScheduleModal('Planes modulares')}
        >
          ¿No sabes cuál elegir? Habla con nosotros →
        </button>
      </p>
    </div>
  );
}
