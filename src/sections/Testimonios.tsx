import type { Testimonial } from '@/types';
import { TestimonialWall } from '../components';

const row1: Testimonial[] = [
  {
    name: 'Carolina Méndez',
    handle: '@carolinamendez',
    avatar: 'https://i.pravatar.cc/150?u=carolina',
    text: 'Antes perdíamos el 40% de los leads por no responder a tiempo en WhatsApp. Con el empleado digital, ahora respondemos en segundos y las conversiones subieron.',
  },
  {
    name: 'Andrés Gutiérrez',
    handle: '@andresgutierrez',
    avatar: 'https://i.pravatar.cc/150?u=andres',
    text: 'La automatización de citas nos ahorró 3 horas diarias. El bot filtra, agenda y hace seguimiento sin que tengamos que intervenir.',
  },
  {
    name: 'María José Restrepo',
    handle: '@mariajoserestrepo',
    avatar: 'https://i.pravatar.cc/150?u=mariajose',
    text: 'Pensé que era complejo, pero en 3 días ya teníamos el empleado digital respondiendo en Instagram y WhatsApp. Mis clientes no notan la diferencia.',
  },
  {
    name: 'Felipe Herrera',
    handle: '@felipeherrera',
    avatar: 'https://i.pravatar.cc/150?u=felipe',
    text: 'El seguimiento automático a prospectos cambió todo. Ya no se nos enfrían los leads y cerramos más ventas cada semana.',
  },
];

const row2: Testimonial[] = [
  {
    name: 'Valentina Ospina',
    handle: '@valentinaospina',
    avatar: 'https://i.pravatar.cc/150?u=valentina',
    text: 'Tenemos un gimnasio y recibíamos 200+ mensajes al día. Ahora el bot responde preguntas frecuentes y nosotros solo cerramos ventas.',
  },
  {
    name: 'Santiago Morales',
    handle: '@santiagomorales',
    avatar: 'https://i.pravatar.cc/150?u=santiago',
    text: 'Lo mejor es que funciona 24/7. Un cliente agendó cita a las 2am un domingo. Eso antes era imposible.',
  },
  {
    name: 'Laura Castillo',
    handle: '@lauracastillo',
    avatar: 'https://i.pravatar.cc/150?u=laura',
    text: 'Como agencia, ahora ofrecemos el servicio a nuestros clientes. Es un diferenciador enorme y nos genera ingresos recurrentes.',
  },
  {
    name: 'Daniel Ramírez',
    handle: '@danielramirez',
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    text: 'Recuperamos clientes que habíamos dado por perdidos. El seguimiento automático es increíblemente efectivo.',
  },
];

export function Testimonios() {
  return (
    <div className="section__inner testimonios__inner">
      <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Lo que dicen nuestros clientes
      </h2>
      <TestimonialWall rows={[row1, row2]} duration={80} />
    </div>
  );
}
