/**
 * Pricing section: plans Sin website / Con website (PDF copy).
 */

export const PLAN_COLORS: Record<string, string> = {
  starter: '#2563eb',
  growth: '#7c3aed',
  pro: '#1e3a5f',
  enterprise: '#3b82f6',
};

export interface PlanEntry {
  id: string;
  name: string;
  price: string;
  period: string;
  priceNote?: string;
  setupFee?: string;
  tagline: string;
  features: string[];
  result: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export const PLANS_SIN_WEB: PlanEntry[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$197',
    period: '/mes',
    priceNote: '≈ $820K COP/mes',
    tagline: 'Para negocios pequeños empezando con IA',
    features: [
      '1 AI Agent (WhatsApp LATAM / Chat Web US)',
      'GHL CRM básico — pipeline, contactos, citas',
      '5 posts de marketing con IA por mes (Holo.ai)',
      'Inbox unificado WhatsApp + Email',
      'Formulario de leads conectado al CRM',
      'Setup done-for-you en 48 horas',
      'Reporte mensual de rendimiento',
      'Soporte email durante vigencia del contrato',
    ],
    result: 'Automatiza lo esencial sin invertir de más.',
    cta: 'Empieza tu prueba gratis',
    ctaHref: '#cta-final',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$297',
    period: '/mes',
    priceNote: '≈ $1.23M COP/mes',
    tagline: 'El más popular para negocios en crecimiento',
    popular: true,
    features: [
      '2 AI Agents — WhatsApp + Chat Web',
      'GHL CRM completo — pipelines, scoring, 2 usuarios',
      '15 posts/ads/reels de marketing con IA por mes',
      '3 workflows de automatización incluidos',
      'Secuencias de nurturing WhatsApp + Email',
      'Agenda de citas con recordatorios automáticos',
      'Reporte semanal + 1 llamada mensual',
      'Soporte WhatsApp directo durante contrato',
    ],
    result: 'Más seguimiento, mejor atención y más ventas sin aumentar el equipo.',
    cta: 'Comienza tu prueba gratis',
    ctaHref: '#cta-final',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$497',
    period: '/mes',
    priceNote: '≈ $2.06M COP/mes',
    tagline: 'Para líderes de mercado que quieren dominar su nicho',
    features: [
      '3 AI Agents — WhatsApp + Web + Instagram',
      'GHL CRM premium — ilimitado, 5 usuarios',
      '30 assets de marketing con IA por mes',
      'Workflows de automatización ilimitados',
      'Agente AI con personalidad y conocimiento custom',
      'Optimización Google Business Profile',
      'Llamada mensual de estrategia',
      'Soporte WhatsApp prioritario mismo día',
    ],
    result: 'Escala ventas y atención sin contratar más personal.',
    cta: 'Empieza ahora',
    ctaHref: '#cta-final',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Cotizar',
    period: '',
    tagline: 'Para grandes operaciones',
    features: [
      'Todo lo del plan Pro, más:',
      'Agentes AI ilimitados en todos los canales',
      'Integraciones API con sistemas existentes',
      'Multi-sede bajo un CRM unificado',
      '60+ assets de marketing por mes',
      'Account manager dedicado',
      'SLA de soporte 4 horas',
    ],
    result: 'Solución personalizada para tu operación.',
    cta: 'Contactar ventas',
    ctaHref: '#cta-final',
  },
];

export const PLANS_CON_WEB: PlanEntry[] = [
  {
    id: 'starter-web',
    name: 'Starter + Web',
    price: '$397',
    period: '/mes',
    priceNote: '≈ $1.65M COP/mes',
    setupFee: 'Setup fee único: $497 USD',
    tagline: 'Web 4–5 páginas + 1 AI Agent + CRM + Marketing',
    features: [
      'Website profesional 4–5 páginas (Home, Servicios, Nosotros, Contacto, Blog)',
      'SEO básico + optimizado para móvil',
      'Todo lo del plan Starter SIN web incluido',
      'Setup fee único: $497 USD (cubre desarrollo web + configuración)',
    ],
    result: 'Presencia digital y automatización desde el día uno.',
    cta: 'Quiero website + automatización',
    ctaHref: '#cta-final',
  },
  {
    id: 'growth-web',
    name: 'Growth + Web',
    price: '$597',
    period: '/mes',
    priceNote: '≈ $2.48M COP/mes',
    setupFee: 'Setup fee único: $797 USD',
    tagline: 'Web completa + 2 AI Agents + CRM + Marketing',
    popular: true,
    features: [
      'Website 6–8 páginas con landing page incluida',
      'Booking de citas integrado en el website',
      'Formularios conectados al AI y al CRM',
      'Todo lo del plan Growth SIN web incluido',
      'Setup fee único: $797 USD',
    ],
    result: 'Web que convierte y equipo digital que atiende 24/7.',
    cta: 'Comienza tu prueba gratis',
    ctaHref: '#cta-final',
  },
  {
    id: 'pro-web',
    name: 'Pro + Web',
    price: '$997',
    period: '/mes',
    priceNote: '≈ $4.14M COP/mes',
    setupFee: 'Setup fee único: $1,297 USD',
    tagline: 'Web premium + suite AI completa + marketing full',
    features: [
      'Website custom 10–12 páginas',
      'Funcionalidades avanzadas según el negocio',
      'Todo lo del plan Pro SIN web incluido',
      'Setup fee único: $1,297 USD',
    ],
    result: 'Dominio total de tu canal digital.',
    cta: 'Empieza ahora',
    ctaHref: '#cta-final',
  },
  {
    id: 'enterprise-web',
    name: 'Enterprise + Web',
    price: 'Cotizar',
    period: '',
    tagline: 'Solución personalizada para grandes operaciones',
    features: [
      'Todo lo del plan Enterprise SIN web, más:',
      'Website enterprise a medida',
      'Integraciones y multi-sede',
      'Account manager y SLA dedicado',
    ],
    result: 'Solución a medida para tu operación.',
    cta: 'Contactar ventas',
    ctaHref: '#cta-final',
  },
];

/** Legacy export for compatibility; use PLANS_SIN_WEB or PLANS_CON_WEB. */
export const PLANS = PLANS_SIN_WEB;
