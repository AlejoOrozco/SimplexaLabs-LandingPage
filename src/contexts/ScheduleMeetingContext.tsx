import { useCallback, useState, type ReactNode } from 'react';
import { ScheduleMeetingContext } from './scheduleMeeting';

export function ScheduleMeetingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);

  const openScheduleModal = useCallback((plan?: string) => {
    setPreselectedPlan(plan);
    setIsOpen(true);
  }, []);

  const closeScheduleModal = useCallback(() => {
    setIsOpen(false);
    setPreselectedPlan(undefined);
  }, []);

  return (
    <ScheduleMeetingContext.Provider
      value={{
        openScheduleModal,
        closeScheduleModal,
        isOpen,
        preselectedPlan,
      }}
    >
      {children}
    </ScheduleMeetingContext.Provider>
  );
}
