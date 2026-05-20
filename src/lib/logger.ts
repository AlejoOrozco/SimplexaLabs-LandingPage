const isDev = import.meta.env.DEV;

export type LogContext = Record<string, unknown>;

/**
 * Centralized logger for frontend. In dev uses console; in production
 * can be extended to send errors to a monitoring service (e.g. Sentry, Vercel Logs).
 */
export const logger = {
  error(message: string, context?: LogContext): void {
    if (isDev) {
      console.error('[SimplexLabs]', message, context ?? '');
    } else {
      // Production: extend here (e.g. send to error tracking service)
      console.error('[SimplexLabs]', message, context ?? '');
    }
  },

  warn(message: string, context?: LogContext): void {
    if (isDev) {
      console.warn('[SimplexLabs]', message, context ?? '');
    }
  },

  info(message: string, context?: LogContext): void {
    if (isDev) {
      console.info('[SimplexLabs]', message, context ?? '');
    }
  },
};
