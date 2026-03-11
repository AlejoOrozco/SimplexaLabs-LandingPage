import { Button, BackgroundPaths, CtaBorderWrap } from '../components';

export function Hero() {
  const benefits = [
    'responde clientes al instante',
    'filtra leads automáticamente',
    'agenda citas y hace seguimiento',
    'vende mientras tu equipo está ocupado',
    'recupera tiempo y escala con más orden',
  ];

  return (
    <>
      <BackgroundPaths />
      <div className="section__inner hero__content">
        <h1 className="hero__title">
          Empleados Digitales con IA que responden, venden y hacen seguimiento 24/7
        </h1>
        <p className="hero__subheadline">
          Automatiza atención al cliente, captura de leads, seguimiento y ventas por WhatsApp, Instagram y tu sitio web sin contratar más personal.
        </p>
        <div className="hero__benefits" aria-label="Beneficios clave">
          <div className="hero__benefits-fade">
            <div className="hero__benefits-track" role="text">
              {benefits.map((t, i) => (
                <span key={`a-${i}`} className="hero__benefit">
                  <span className="hero__benefit-check" aria-hidden="true">✓</span>
                  {t}
                </span>
              ))}
              <span className="hero__benefits-gap" aria-hidden="true" />
              {benefits.map((t, i) => (
                <span key={`b-${i}`} className="hero__benefit" aria-hidden="true">
                  <span className="hero__benefit-check">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero__ctas">
          <CtaBorderWrap>
            <Button
              href="#pricing"
              variant="primary"
              className="btn--hero-primary btn--marquee-overflow"
            >
              <span className="btn__marquee" aria-label="Empieza tu prueba gratis">
                <span className="btn__marquee-track">
                  <span className="btn__marquee-item">Empieza tu prueba gratis</span>
                  <span className="btn__marquee-item" aria-hidden="true">Empieza tu prueba gratis</span>
                </span>
              </span>
            </Button>
          </CtaBorderWrap>
          <Button href="#pricing" variant="secondary">Ver planes</Button>
        </div>
        <p className="hero__microcopy">
          7 días gratis en Starter, Medium y Premium
        </p>
      </div>
    </>
  );
}
