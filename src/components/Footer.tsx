export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">SimpLexaLabs</div>
        <p className="footer__muted">
          Empleados digitales con IA para tu negocio. Respuesta, ventas y seguimiento 24/7.
        </p>
        <nav className="footer__links" aria-label="Enlaces del sitio">
          <a href="#hero">Inicio</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#pricing">Planes</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>
        <p className="footer__copy">&copy; {new Date().getFullYear()} SimpLexaLabs. Colombia.</p>
      </div>
    </footer>
  );
}
