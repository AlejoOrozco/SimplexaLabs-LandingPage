import type { Testimonial } from '@/types';
import { TestimonialWall } from '../components';

/** Reseñas de ejemplo — sustituir por testimonios reales cuando estén disponibles */
const row1: Testimonial[] = [
  {
    name: 'Mariana V.',
    handle: '@marianav_clinic',
    avatar: 'https://i.pravatar.cc/150?u=mariana-v',
    text: 'Antes perdíamos citas por no contestar a tiempo. Ahora el sistema responde y agenda solo. La recepción por fin puede respirar.',
  },
  {
    name: 'Diego R.',
    handle: '@diego_gym_ctg',
    avatar: 'https://i.pravatar.cc/150?u=diego-r',
    text: 'Los mensajes de membresías y horarios ya no se acumulan. Los leads reciben respuesta al instante, incluso de noche.',
  },
  {
    name: 'Lucía M.',
    handle: '@lucia_tienda',
    avatar: 'https://i.pravatar.cc/150?u=lucia-m',
    text: 'Teníamos web pero no generaba contactos. Renovar el sitio y conectar WhatsApp cambió el volumen de consultas de un mes a otro.',
  },
];

const row2: Testimonial[] = [
  {
    name: 'Andrés P.',
    handle: '@andres_pyme',
    avatar: 'https://i.pravatar.cc/150?u=andres-p',
    text: 'No queríamos otra herramienta que nadie use. Ellos lo dejaron funcionando y nosotros solo vemos los leads entrar.',
  },
  {
    name: 'Valentina S.',
    handle: '@vale_shop_co',
    avatar: 'https://i.pravatar.cc/150?u=valentina-s',
    text: 'El seguimiento de carritos y las preguntas por WhatsApp ya no se quedan colgados. Se nota en las ventas cerradas.',
  },
  {
    name: 'Carlos T.',
    handle: '@carlos_consultorio',
    avatar: 'https://i.pravatar.cc/150?u=carlos-t',
    text: 'En dos semanas teníamos web, contenido para redes y respuestas automáticas. Sin tener que volvernos expertos en marketing.',
  },
];

export function Testimonios() {
  return (
    <div className="section__inner testimonios__inner">
      <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        Lo que dicen nuestros primeros clientes
      </h2>
      <p className="section__subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Historias de negocios que ya delegaron la parte digital en un solo sistema.
      </p>
      <TestimonialWall rows={[row1, row2]} duration={80} />
      <p className="testimonios__disclaimer" role="note">
        Estas reseñas han sido traducidas automáticamente al español desde el inglés.
      </p>
    </div>
  );
}
