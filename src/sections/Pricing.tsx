import { useState } from 'react';
import { PricingCard } from '../components';

const PLAN_COLORS: Record<string, string> = {
  starter: '#2563eb',
  medium: '#7c3aed',
  premium: '#1e3a5f',
  enterprise: '#3b82f6',
};

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    period: '/mes',
    tagline: 'Para negocios pequeños que quieren automatizar lo esencial',
    features: [
      '1 empleado digital con IA',
      '1 plataforma: WhatsApp o Instagram o sitio web',
      'respuestas automáticas',
      'preguntas frecuentes automatizadas',
      'captura automática de leads',
      'flujos simples de automatización',
      'base de conocimiento básica',
      'panel básico de analítica',
      'soporte estándar',
      '7 días de prueba gratis',
    ],
    result: 'Ahorra horas respondiendo mensajes manualmente.',
    cta: 'Empieza tu prueba gratis',
    ctaHref: '#cta-final',
  },
  {
    id: 'medium',
    name: 'Medium',
    price: '$99',
    period: '/mes',
    tagline: 'El plan más popular para convertir más conversaciones en clientes',
    popular: true,
    features: [
      '2 empleados digitales con IA',
      '2 plataformas',
      'automatizaciones avanzadas',
      'calificación automática de leads',
      'seguimiento automático a prospectos',
      'personalidad y tono personalizado',
      'memoria de conversaciones',
      'analítica avanzada',
      'automatización de ventas',
      'soporte prioritario',
      '7 días de prueba gratis',
    ],
    result: 'Más seguimiento, mejor atención y más ventas sin aumentar el equipo.',
    cta: 'Comienza tu prueba gratis',
    ctaHref: '#cta-final',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$149',
    period: '/mes',
    tagline: 'Automatización completa para empresas que quieren escalar en serio',
    features: [
      '3 empleados digitales con IA',
      '3 plataformas: WhatsApp + Instagram + Website',
      'automatización multicanal',
      'workflows avanzados',
      'puntuación de leads',
      'automatización de citas',
      'analítica avanzada de conversaciones',
      'librería de plantillas de automatización',
      'soporte prioritario avanzado',
      '7 días de prueba gratis',
    ],
    result: 'Escala ventas y atención sin contratar más personal.',
    cta: 'Empieza ahora',
    ctaHref: '#cta-final',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contactar',
    period: '',
    tagline: 'Para empresas que necesitan una solución personalizada',
    features: [
      'empleados digitales ilimitados',
      'plataformas ilimitadas',
      'automatizaciones personalizadas',
      'integraciones con CRM',
      'onboarding personalizado',
      'gerente de cuenta dedicado',
      'soporte empresarial',
    ],
    result: 'Automatización adaptada a tu operación real y preparada para crecer.',
    cta: 'Contactar ventas',
    ctaHref: '#cta-final',
  },
];

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
