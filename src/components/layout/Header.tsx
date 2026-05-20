import { Button } from '../ui';
import { BRAND_LOGO, BRAND_NAME } from '@/constants/brand';
import { APP_LOGIN_URL } from '@/constants/contact';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label={`${BRAND_NAME} — inicio`}>
          <img
            src={BRAND_LOGO}
            alt={BRAND_NAME}
            className="header__logo-img"
            width={140}
            height={36}
            decoding="async"
          />
        </a>
        <nav className="header__nav" aria-label="Principal">
          <a href="#problema-solucion">Servicios</a>
          <a href="#pricing">Precios</a>
          <a href="#programa-fundador">Nosotros</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#cta-final">Contacto</a>
          <a href={APP_LOGIN_URL} className="header__login">
            Iniciar sesión
          </a>
          <Button variant="primary" className="header__cta" href={APP_LOGIN_URL}>
            Demo Gratis
          </Button>
        </nav>
      </div>
    </header>
  );
}
