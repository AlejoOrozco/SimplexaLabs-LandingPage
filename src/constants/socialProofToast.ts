/**
 * Social proof toast: names, cities, plan labels, time labels, and timing config.
 */

export const TOAST_NAMES = [
  'Camila',
  'Andrés',
  'Valentina',
  'Santiago',
  'Daniela',
  'Sebastián',
  'Isabella',
  'Felipe',
  'Mariana',
  'Julián',
  'Natalia',
  'Diego',
  'Sofía',
  'Mateo',
  'Alejandra',
  'Carlos',
  'Laura',
  'Tomás',
  'Paula',
  'Nicolás',
] as const;

export const TOAST_CITIES = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Bucaramanga',
  'Pereira',
  'Manizales',
  'Cúcuta',
  'Santa Marta',
] as const;

export interface ToastPlanStyle {
  name: string;
  color: string;
  bg: string;
}

export const TOAST_PLANS: ToastPlanStyle[] = [
  { name: 'Plan Starter', color: '#2563eb', bg: 'rgba(37,99,235,0.1)' },
  { name: 'Plan Medium', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
  { name: 'Plan Premium', color: '#1e3a5f', bg: 'rgba(30,58,95,0.1)' },
  { name: 'Plan Enterprise', color: '#0d9488', bg: 'rgba(13,148,136,0.1)' },
];

export const TOAST_TIME_LABELS = [
  'hace un momento',
  'hace 2 min',
  'hace 5 min',
  'hace 8 min',
  'justo ahora',
] as const;

/** First toast delay (ms), then interval between toasts (ms), visible duration (ms). */
export const TOAST_TIMING = {
  initialDelayMs: 20_000,
  intervalMs: 30_000,
  visibleForMs: 3_000,
} as const;
