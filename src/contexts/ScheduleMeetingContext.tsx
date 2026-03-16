import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type ScheduleMeetingContextValue = {
  openScheduleModal: (preselectedPlan?: string) => void;
  closeScheduleModal: () => void;
  isOpen: boolean;
  preselectedPlan: string | undefined;
};

const ScheduleMeetingContext = createContext<ScheduleMeetingContextValue | null>(null);

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

export function useScheduleMeeting() {
  const ctx = useContext(ScheduleMeetingContext);
  if (!ctx) throw new Error('useScheduleMeeting must be used within ScheduleMeetingProvider');
  return ctx;
}
