import { BRAND_LOGO, BRAND_NAME } from '@/constants/brand';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src={BRAND_LOGO}
            alt={BRAND_NAME}
            className="footer__logo-img"
            width={160}
            height={40}
            decoding="async"
          />
        </div>
        <p className="footer__muted">
          Sitio web, marketing y automatizaciones hechos y operados por nosotros.
        </p>
        <nav className="footer__links" aria-label="Enlaces del sitio">
          <a href="#hero">Inicio</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#pricing">Precios</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. Colombia.
        </p>
      </div>
    </footer>
  );
}
