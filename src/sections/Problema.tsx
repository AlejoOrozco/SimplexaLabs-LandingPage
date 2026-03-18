import { ShimmerText, FadeInWords } from '../components';

const PAIN_POINTS = [
  'Demasiados mensajes en WhatsApp',
  'Citas que no se concretan',
  'Seguimiento manual que nunca se hace',
  'Leads que se enfrían',
  'Preguntas repetitivas que quitan tiempo',
  'Ventas perdidas por responder tarde',
  'Contenido de redes que nunca se publica',
  'Sin sistema para saber qué leads están calientes',
];

export function Problema() {
  return (
    <>
      <div className="section__inner problema__content">
        <h2 className="section__title section__title--two-lines section__title--gradient">
          <span className="section__title-line">
            <span className="section__title-muted">Tu negocio no está perdiendo </span>
            <ShimmerText text="chats" className="section__title-shimmer" />
          </span>
          <span className="section__title-line">
            <span className="section__title-muted">Está perdiendo </span>
            <ShimmerText text="ventas" className="section__title-shimmer" />
            <span className="section__title-muted">.</span>
          </span>
        </h2>

        <div className="problema__body">
          <div className="problema__text">
            <FadeInWords
              text="Muchos negocios en Colombia responden tarde, dejan mensajes sin contestar o nunca hacen seguimiento a los prospectos."
              className="section__copy"
            />
            <FadeInWords
              text="El problema no siempre es la falta de clientes. El problema es que la atención sigue siendo manual, lenta y difícil de escalar."
              className="section__copy"
              startDelay={0.4}
            />
          </div>

          <ul className="problema__points">
            {PAIN_POINTS.map((point) => (
              <li key={point} className="problema__point">
                <span className="problema__point-x" aria-hidden="true">✕</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
