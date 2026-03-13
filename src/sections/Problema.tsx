import { ShimmerText, FadeInWords, BlurBlobs } from '../components';

const painPoints = [
  'Demasiados mensajes en WhatsApp',
  'Leads que se enfrían',
  'Citas que no se concretan',
  'Preguntas repetitivas que quitan tiempo',
  'Seguimiento manual que nunca se hace',
  'Ventas perdidas por responder tarde',
];

export function Problema() {
  return (
    <>
      <BlurBlobs
        colors={['#c4b5fd', '#7c3aed', '#93c5fd', '#a78bfa']}
        blur={120}
        speed={3}
        opacity={0.45}
      />
      <div className="section__inner problema__content">
        <h2 className="section__title section__title--two-lines">
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
            {painPoints.map((point) => (
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
