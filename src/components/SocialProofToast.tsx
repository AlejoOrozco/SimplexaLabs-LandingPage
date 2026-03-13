import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const NAMES = [
  'Camila', 'Andrés', 'Valentina', 'Santiago', 'Daniela',
  'Sebastián', 'Isabella', 'Felipe', 'Mariana', 'Julián',
  'Natalia', 'Diego', 'Sofía', 'Mateo', 'Alejandra',
  'Carlos', 'Laura', 'Tomás', 'Paula', 'Nicolás',
];

const CITIES = [
  'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena',
  'Bucaramanga', 'Pereira', 'Manizales', 'Cúcuta', 'Santa Marta',
];

const PLANS = [
  { name: 'Plan Starter', color: '#2563eb', bg: 'rgba(37,99,235,0.1)' },
  { name: 'Plan Medium', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
  { name: 'Plan Premium', color: '#1e3a5f', bg: 'rgba(30,58,95,0.1)' },
  { name: 'Plan Enterprise', color: '#0d9488', bg: 'rgba(13,148,136,0.1)' },
];

const TIME_LABELS = [
  'hace un momento', 'hace 2 min', 'hace 5 min', 'hace 8 min', 'justo ahora',
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface ToastData {
  id: number;
  name: string;
  plan: typeof PLANS[number];
  city: string;
  time: string;
}

function buildToast(id: number): ToastData {
  return { id, name: pick(NAMES), plan: pick(PLANS), city: pick(CITIES), time: pick(TIME_LABELS) };
}

/* Interval between toasts (ms) — first one fires after INITIAL_DELAY */
const INITIAL_DELAY = 20_000;
const INTERVAL      = 30_000;
const VISIBLE_FOR   = 3_000;

export function SocialProofToast() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const counterRef = useRef(0);

  const show = useCallback(() => {
    counterRef.current += 1;
    setToast(buildToast(counterRef.current));
  }, []);

  /* Auto-dismiss after VISIBLE_FOR ms */
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), VISIBLE_FOR);
    return () => clearTimeout(t);
  }, [toast]);

  /* Fire first toast, then repeat */
  useEffect(() => {
    const first = setTimeout(show, INITIAL_DELAY);
    const interval = setInterval(show, INTERVAL);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div className="sp-toast-portal" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            className="sp-toast"
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          >
            {/* Avatar */}
            <div className="sp-toast__avatar" aria-hidden="true">
              {toast.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="sp-toast__body">
              <p className="sp-toast__line">
                <strong>{toast.name}</strong> adquirió el{' '}
                <span
                  className="sp-toast__plan"
                  style={{ color: toast.plan.color, background: toast.plan.bg }}
                >
                  {toast.plan.name}
                </span>
              </p>
              <p className="sp-toast__meta">
                <span className="sp-toast__flag" aria-hidden="true">🇨🇴</span>
                {toast.city}, Colombia · {toast.time}
              </p>
            </div>

            {/* Dismiss */}
            <button
              className="sp-toast__close"
              aria-label="Cerrar notificación"
              onClick={() => setToast(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
