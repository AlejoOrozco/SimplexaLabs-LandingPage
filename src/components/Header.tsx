import { Button, CtaBorderWrap } from '../components';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">SimpLexaLabs</a>
        <nav className="header__nav" aria-label="Principal">
          <a href="#hero">Inicio</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#pricing">Planes</a>
          <a href="#faq">FAQ</a>
          <CtaBorderWrap>
            <Button
              href="#cta-final"
              variant="primary"
              className="btn--hero-primary btn--marquee-overflow header__cta"
            >
              <span className="btn__marquee" aria-label="Prueba gratis">
                <span className="btn__marquee-track">
                  <span className="btn__marquee-item">Prueba gratis</span>
                  <span className="btn__marquee-item" aria-hidden="true">Prueba gratis</span>
                </span>
              </span>
            </Button>
          </CtaBorderWrap>
        </nav>
      </div>
    </header>
  );
}
