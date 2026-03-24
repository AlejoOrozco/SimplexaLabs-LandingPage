import { ElegantShapes } from '../components/ElegantShapes';

const PROBLEMS = [
  'Tu negocio necesita presencia digital, pero no tienes tiempo de aprenderlo todo',
  'Pagas por herramientas que nadie sabe usar bien en tu equipo',
  'Pierdes clientes potenciales porque nadie responde rápido en WhatsApp o Instagram',
  'Tu sitio web existe, pero no genera nada',
];

const SOLUTIONS = [
  {
    title: 'Sitio Web Profesional',
    text: 'Diseñamos y publicamos tu sitio web optimizado para Google, móvil y conversión. Rápido, bonito y hecho para que te encuentren.',
  },
  {
    title: 'Marketing',
    text: 'Creamos y publicamos tu contenido en redes sociales con inteligencia artificial. 30 piezas de contenido por mes, listo para publicar — sin que muevas un dedo.',
  },
  {
    title: 'Automatizaciones 24/7',
    text: 'Conectamos tu WhatsApp, Instagram y correo a un sistema que responde, agenda y da seguimiento automáticamente. Tu negocio responde aunque estés dormido.',
  },
];

export function Problema() {
  return (
    <div className="problema-solucion">
      <ElegantShapes />
      <div className="section__inner problema-solucion__inner">
        <p className="problema-solucion__eyebrow">Problema → Solución</p>
        <h2 className="section__title section__title--two-lines section__title--gradient">¿Te suena familiar?</h2>
        <p className="section__subtitle problema-solucion__lead">
          A la izquierda, lo que hoy te frena. A la derecha, lo que construimos y operamos por ti — sin que tengas que
          volverte experto en herramientas.
        </p>

        <div className="problema-solucion__split">
          <div className="problema-solucion__col problema-solucion__col--pain">
            <h3 className="problema-solucion__col-title">Sin un sistema claro…</h3>
            <ul className="problema-solucion__list problema-solucion__list--pain">
              {PROBLEMS.map((text) => (
                <li key={text}>
                  <span className="problema-solucion__x" aria-hidden="true">
                    ✕
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="problema-solucion__col problema-solucion__col--gain">
            <h3 className="problema-solucion__col-title">Con nosotros…</h3>
            <ul className="problema-solucion__list problema-solucion__list--gain">
              {SOLUTIONS.map((item) => (
                <li key={item.title}>
                  <span className="problema-solucion__check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <strong className="problema-solucion__solution-title">{item.title}</strong>
                    <p className="problema-solucion__solution-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="problema__transition">
          Nosotros no te enseñamos a hacerlo. <strong>Lo hacemos por ti.</strong>
        </p>
      </div>
    </div>
  );
}
