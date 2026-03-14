import { RevealText } from '../components/RevealText';
import { ElegantShapes } from '../components/ElegantShapes';

export function Solucion() {
  return (
    <>
      <ElegantShapes />
      <div className="section__inner solucion__inner">
        <RevealText
          as="h2"
          className="section__title"
          lines={[
            'No vendemos chatbots.',
            'Instalamos empleados digitales',
            'con IA para tu negocio.',
          ]}
          stagger={0.08}
          startDelay={0.15}
        />
        <RevealText
          as="p"
          className="section__copy"
          lines={[
            'SimpLexaLabs implementa empleados digitales con inteligencia artificial',
            'que atienden conversaciones, califican prospectos, responden preguntas frecuentes,',
            'hacen seguimiento y ayudan a vender en tus canales digitales.',
          ]}
          stagger={0.06}
          startDelay={0.8}
        />
        <RevealText
          as="p"
          className="section__copy"
          lines={[
            'Trabajan 24/7 y le quitan a tu equipo gran parte de la carga',
            'repetitiva para que se enfoque en cerrar, atender mejor y crecer.',
          ]}
          stagger={0.06}
          startDelay={1.8}
        />
        <RevealText
          as="p"
          className="section__copy"
          lines={[
            'Y además — generamos tu contenido de marketing mensualmente con IA:',
            'posts, ads, reels y emails listos para publicar, con la voz de tu marca.',
          ]}
          stagger={0.06}
          startDelay={2.6}
        />
      </div>
    </>
  );
}
