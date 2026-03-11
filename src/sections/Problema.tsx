import { ShimmerText } from '../components';

export function Problema() {
  return (
    <div className="section__inner">
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
      <p className="section__copy">
        Muchos negocios en Colombia responden tarde, dejan mensajes sin contestar o nunca hacen seguimiento a los prospectos.
      </p>
      <p className="section__copy">
        El problema no siempre es la falta de clientes.<br />
        El problema es que la atención sigue siendo manual, lenta y difícil de escalar.
      </p>
      <ul className="list--bullets">
        <li>demasiados mensajes en WhatsApp</li>
        <li>leads que se enfrían</li>
        <li>citas que no se concretan</li>
        <li>preguntas repetitivas que quitan tiempo</li>
        <li>seguimiento manual que nunca se hace</li>
        <li>ventas perdidas por responder tarde</li>
      </ul>
    </div>
  );
}
