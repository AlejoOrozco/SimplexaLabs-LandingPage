import { Button, CtaBorderWrap } from '../ui';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';

export function Header() {
  const { openScheduleModal } = useScheduleMeeting();

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          SimpLexaLabs
        </a>
        <nav className="header__nav" aria-label="Principal">
          <a href="#problema-solucion">Servicios</a>
          <a href="#pricing">Precios</a>
          <a href="#programa-fundador">Nosotros</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#cta-final">Contacto</a>
          <CtaBorderWrap>
            <Button
              variant="primary"
              className="btn--hero-primary header__cta"
              onClick={() => openScheduleModal('Demo Gratis')}
            >
              Demo Gratis
            </Button>
          </CtaBorderWrap>
        </nav>
      </div>
    </header>
  );
}
