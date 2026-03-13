const isDev = import.meta.env.DEV;

export type LogContext = Record<string, unknown>;

/**
 * Centralized logger for frontend. In dev uses console; in production
 * can be extended to send errors to a monitoring service (e.g. Sentry, Vercel Logs).
 */
export const logger = {
  error(message: string, context?: LogContext): void {
    if (isDev) {
      console.error('[SimpLexaLabs]', message, context ?? '');
    } else {
      // Production: extend here (e.g. send to error tracking service)
      console.error('[SimpLexaLabs]', message, context ?? '');
    }
  },

  warn(message: string, context?: LogContext): void {
    if (isDev) {
      console.warn('[SimpLexaLabs]', message, context ?? '');
    }
  },

  info(message: string, context?: LogContext): void {
    if (isDev) {
      console.info('[SimpLexaLabs]', message, context ?? '');
    }
  },
};
