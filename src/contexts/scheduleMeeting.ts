import { createContext, useContext } from 'react';

export interface ScheduleMeetingContextValue {
  openScheduleModal: (preselectedPlan?: string) => void;
  closeScheduleModal: () => void;
  isOpen: boolean;
  preselectedPlan: string | undefined;
}

export const ScheduleMeetingContext = createContext<ScheduleMeetingContextValue | null>(null);

export function useScheduleMeeting(): ScheduleMeetingContextValue {
  const ctx = useContext(ScheduleMeetingContext);
  if (!ctx) throw new Error('useScheduleMeeting must be used within ScheduleMeetingProvider');
  return ctx;
}
