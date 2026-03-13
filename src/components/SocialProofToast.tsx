import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  TOAST_NAMES,
  TOAST_CITIES,
  TOAST_PLANS,
  TOAST_TIME_LABELS,
  TOAST_TIMING,
  type ToastPlanStyle,
} from '@/constants/socialProofToast';
import { cn } from '@/lib/utils';

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface ToastData {
  id: number;
  name: string;
  plan: ToastPlanStyle;
  city: string;
  time: string;
}

function buildToast(id: number): ToastData {
  return {
    id,
    name: pick(TOAST_NAMES),
    plan: pick(TOAST_PLANS),
    city: pick(TOAST_CITIES),
    time: pick(TOAST_TIME_LABELS),
  };
}

const PLAN_CLASS: Record<string, string> = {
  'Plan Starter': 'sp-toast__plan--starter',
  'Plan Medium': 'sp-toast__plan--medium',
  'Plan Premium': 'sp-toast__plan--premium',
  'Plan Enterprise': 'sp-toast__plan--enterprise',
};

export function SocialProofToast() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const counterRef = useRef(0);

  const show = useCallback(() => {
    counterRef.current += 1;
    setToast(buildToast(counterRef.current));
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), TOAST_TIMING.visibleForMs);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const first = setTimeout(show, TOAST_TIMING.initialDelayMs);
    const interval = setInterval(show, TOAST_TIMING.intervalMs);
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
            <div className="sp-toast__avatar" aria-hidden="true">
              {toast.name.charAt(0)}
            </div>

            <div className="sp-toast__body">
              <p className="sp-toast__line">
                <strong>{toast.name}</strong> adquirió el{' '}
                <span
                  className={cn('sp-toast__plan', PLAN_CLASS[toast.plan.name])}
                >
                  {toast.plan.name}
                </span>
              </p>
              <p className="sp-toast__meta">
                <span className="sp-toast__flag" aria-hidden="true">
                  🇨🇴
                </span>
                {toast.city}, Colombia · {toast.time}
              </p>
            </div>

            <button
              type="button"
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
