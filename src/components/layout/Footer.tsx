export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">SimpLexaLabs</div>
        <p className="footer__muted">
          Sitio web, marketing y automatizaciones hechos y operados por nosotros.
        </p>
        <nav className="footer__links" aria-label="Enlaces del sitio">
          <a href="#hero">Inicio</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#pricing">Precios</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>
        <p className="footer__copy">&copy; {new Date().getFullYear()} SimpLexaLabs. Colombia.</p>
      </div>
    </footer>
  );
}
