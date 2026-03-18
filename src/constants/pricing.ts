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
    cta: 'Empieza tu prueba gratis',
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
    cta: 'Empieza tu prueba gratis',
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

// ─────────────────────────────────────────────────────────────────────────────
// PDF-guided pricing model (single pricing source)
// Website + Marketing toggles (both are mutually exclusive inside their group)
// ─────────────────────────────────────────────────────────────────────────────

export type WebsiteMode = 'sin-web' | 'con-web';
export type MarketingMode = 'sin-marketing' | 'con-marketing';

// Accent colors aligned to the current site palette
export const PLAN_COLORS_PDF: Record<string, string> = {
  esencial: '#2563eb',
  negocio: '#7c3aed',
  pro: '#1e3a5f',
  enterprise: '#3b82f6',
};

const BASE_PLANS_PDF = [
  {
    id: 'esencial',
    name: 'Esencial',
    baseUsd: 127,
    tagline: 'Negocio pequeño que ya tiene clientes, pero pierde consultas por WhatsApp sin responder.',
    result: 'El AI captura y convierte consultas existentes — sin prometer tráfico nuevo sin marketing.',
    cta: 'Empieza tu prueba gratis',
    popular: false,
    colorId: 'esencial',
  },
  {
    id: 'negocio',
    name: 'Negocio',
    baseUsd: 197,
    tagline: 'Volumen medio de consultas con presencia activa en IG y WhatsApp.',
    result: 'Más seguimiento y mejor atención para que tus leads no se enfríen.',
    cta: 'Comienza tu prueba gratis',
    popular: true,
    colorId: 'negocio',
  },
  {
    id: 'pro',
    name: 'Pro',
    baseUsd: 297,
    tagline: 'Alto volumen (100+/mes): reactivación de leads y automatización sin límites.',
    result: 'Workflows ilimitados + analytics para escalar ventas y atención 24/7.',
    cta: 'Empieza tu prueba gratis',
    popular: false,
    colorId: 'pro',
  },
  {
    id: 'enterprise',
    name: 'Empresa',
    baseUsd: 497,
    tagline: 'Multi-ubicación con Voz AI e integraciones avanzadas, todo personalizado.',
    result: 'Gestión completa y solución a medida para tu operación.',
    cta: 'Cotizar',
    popular: false,
    colorId: 'enterprise',
  },
] as const;

const USD_TO_COP = 4300; // approx COP per 1 USD

function formatCopMonthly(usd: number) {
  const cop = usd * USD_TO_COP;

  // Keep "K" for < 1M (e.g. 847K), and switch to "M" for >= 1M (e.g. 2.14M)
  if (cop >= 1_000_000) {
    const m = cop / 1_000_000;
    return `≈ $${m.toFixed(2).replace(/\.00$/, '')}M COP/mes`;
  }

  const k = Math.round(cop / 1000);
  return `≈ $${k}K COP/mes`;
}

function priceNote(usd: number) {
  return formatCopMonthly(usd);
}

const WEBSITE_BY_PLAN = {
  esencial: { tier: 'starter', monthlyUsd: 50, setupUsd: 297 },
  negocio: { tier: 'starter', monthlyUsd: 50, setupUsd: 297 },
  pro: { tier: 'pro', monthlyUsd: 80, setupUsd: 497 },
  enterprise: { tier: 'custom', monthlyUsd: 120, setupUsd: 797 },
} as const;

const MARKETING_BY_PLAN = {
  esencial: { tier: 'basico', monthlyUsd: 79 },
  negocio: { tier: 'pro', monthlyUsd: 127 },
  pro: { tier: 'total', monthlyUsd: 197 },
  enterprise: { tier: 'total', monthlyUsd: 197 },
} as const;

function baseFeatures(planId: string, marketingMode: MarketingMode): string[] {
  const commonNoMarketingAviso =
    marketingMode === 'sin-marketing'
      ? [
        'Sin marketing: resultados dependen de tu flujo/tu tráfico existente. El AI convierte consultas, no genera tráfico nuevo.',
      ]
      : [];

  switch (planId) {
    case 'esencial':
      return [
        '1 AI Agent en WhatsApp · CRM básico',
        'Pipeline de leads · Inbox unificado',
        'Booking de citas',
        'Captura y convierte consultas existentes',
        ...commonNoMarketingAviso,
      ];
    case 'negocio':
      return [
        '2 AI Agents (WhatsApp + Instagram) · CRM completo',
        'Workflows automáticos · Booking',
        'Seguimiento de leads',
        'Reportes mensuales',
        ...commonNoMarketingAviso,
      ];
    case 'pro':
      return [
        '3 AI Agents (WhatsApp + Web + Instagram) · CRM premium',
        'Workflows ilimitados · Reactivación de leads fríos',
        'Dashboard analytics · Soporte prioritario',
        'Operación AI 24/7 completa',
        ...commonNoMarketingAviso,
      ];
    case 'enterprise':
      return [
        'Multi-ubicación · Voz AI',
        'Integraciones avanzadas · Todo personalizado',
        'Reunión mensual estratégica incluida',
      ];
    default:
      return [...commonNoMarketingAviso];
  }
}

function websiteFeatures(planId: string): string[] {
  switch (planId) {
    case 'esencial':
    case 'negocio':
      return [
        '🌐 Web Starter: 4 páginas · Mobile-first',
        'Hosting incluido · Dominio básico',
        'Integrado con AI + CRM desde el día 1',
        'Entrega en 14 días hábiles',
      ];
    case 'pro':
      return [
        '🌐 Web Pro: 6–8 páginas · Blog · Galería',
        'SEO básico + formularios avanzados',
        'Integrado completo con AI + CRM',
        'Entrega en 21 días hábiles',
      ];
    case 'enterprise':
      return [
        '🌐 Web Custom: 10–12 páginas · E-commerce · Booking avanzado',
        'Integraciones custom · Todo a medida',
        'Entrega en 30 días hábiles + kick-off',
      ];
    default:
      return [];
  }
}

function marketingFeatures(planId: string): string[] {
  switch (planId) {
    case 'esencial':
      return [
        '📱 Marketing Básico (Holo.ai): 8 posts/mes listos para publicar',
        'Personalizado con marca del cliente · Temáticas del sector',
        'Generación automática con Holo.ai',
      ];
    case 'negocio':
      return [
        '📱 Marketing Pro (Holo.ai): 15 posts + 2 reels + 2 ads listos',
        'Calendario mensual · Temáticas variadas',
        'Generación de todos los assets con Holo.ai',
      ];
    case 'pro':
    case 'enterprise':
      return [
        '📱 Marketing Total (Holo.ai): 20–30 assets/mes',
        'Posts + reels + ads + emails + stories',
        'Toda la paleta de formatos · Máxima presencia',
        'Se entrega el primer día de cada mes',
      ];
    default:
      return [];
  }
}

function resolveSetupFee(planId: string) {
  if (planId === 'esencial' || planId === 'negocio') return 'Setup fee único: $297 USD';
  if (planId === 'pro') return 'Setup fee único: $497 USD';
  return 'Setup fee único: $797 USD';
}

export function getPricingPlansPdf2026(
  websiteMode: WebsiteMode,
  marketingMode: MarketingMode
): PlanEntry[] {
  const marketingEnabled = marketingMode === 'con-marketing';
  const websiteEnabled = websiteMode === 'con-web';

  return BASE_PLANS_PDF.map((p) => {
    const web = websiteEnabled
      ? WEBSITE_BY_PLAN[p.id as keyof typeof WEBSITE_BY_PLAN]
      : null;
    const mkt = marketingEnabled ? MARKETING_BY_PLAN[p.id as keyof typeof MARKETING_BY_PLAN] : null;

    const monthlyUsd = p.baseUsd + (web?.monthlyUsd ?? 0) + (mkt?.monthlyUsd ?? 0);
    const period = '/mes';
    const price = `$${monthlyUsd}`;

    const features = [
      ...baseFeatures(p.id, marketingMode),
      ...(websiteEnabled ? websiteFeatures(p.id) : []),
      ...(marketingEnabled ? marketingFeatures(p.id) : []),
    ];

    return {
      id: p.id,
      name: p.name,
      price,
      period,
      priceNote: priceNote(monthlyUsd),
      setupFee: websiteEnabled ? resolveSetupFee(p.id) : undefined,
      tagline: p.tagline,
      features,
      result: p.result,
      cta: p.cta,
      ctaHref: '#cta-final',
      popular: p.popular,
    };
  });
}
