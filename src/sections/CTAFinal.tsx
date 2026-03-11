import { Button } from '../components';

export function CTAFinal() {
  return (
    <div className="section__inner">
      <h2 className="section__title cta-final__title">
        Deja de perder tiempo, leads y ventas por operar manualmente
      </h2>
      <p className="section__subtitle">
        Empieza hoy con SimpLexaLabs y descubre cómo un empleado digital con IA puede trabajar 24/7 para tu negocio.
      </p>
      <div className="hero__ctas">
        <Button href="#pricing" variant="primary">Comienza tu prueba gratis</Button>
        <Button href="#cta-final" variant="secondary">Hablar con ventas</Button>
      </div>
    </div>
  );
}
