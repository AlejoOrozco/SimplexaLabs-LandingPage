import { motion } from 'motion/react';
import { Button } from '../components';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import {
  LayoutGrid,
  Inbox,
  Calendar,
  RefreshCw,
  BarChart3,
  Users,
} from 'lucide-react';

const FEATURES = [
  {
    icon: LayoutGrid,
    title: 'Pipeline visual de ventas',
    text: 'Ve en qué etapa está cada prospecto: nuevo lead, contactado, en negociación, cerrado. Arrastra y mueve los leads con un clic.',
  },
  {
    icon: Inbox,
    title: 'Inbox unificado',
    text: 'Todos tus mensajes de WhatsApp, Instagram y web en un solo lugar. Sin abrir 5 aplicaciones distintas para atender a tus clientes.',
  },
  {
    icon: Calendar,
    title: 'Agenda de citas integrada',
    text: 'Tus clientes pueden agendar directamente desde WhatsApp o tu web. El sistema manda recordatorios automáticos — menos no-shows.',
  },
  {
    icon: RefreshCw,
    title: 'Automatizaciones de seguimiento',
    text: 'Define cuándo y cómo hacer seguimiento. El sistema lo ejecuta solo. Nadie se queda sin respuesta. Ningún lead se enfría por descuido.',
  },
  {
    icon: BarChart3,
    title: 'Reportes de rendimiento',
    text: '¿Cuántos leads entraron? ¿Cuántos se convirtieron? ¿Qué canal funciona mejor? Todo medido, semana a semana.',
  },
  {
    icon: Users,
    title: 'Acceso para tu equipo',
    text: 'Varios usuarios pueden ver y gestionar leads al mismo tiempo. Control total de quién atiende qué.',
  },
];

export function CrmAutomatizacion() {
  const { openScheduleModal } = useScheduleMeeting();
  return (
    <div className="section__inner crm-section__inner">
      <motion.p
        className="crm-section__lead"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Cada lead, organizado. Cada seguimiento, automático.
      </motion.p>
      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Tu empleado digital no solo responde — registra cada conversación, organiza tus contactos y te muestra exactamente en qué etapa está cada prospecto.
      </motion.p>
      <motion.h2
        className="section__title crm-section__headline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        Un CRM completo incluido en todos los planes.
      </motion.h2>
      <motion.p
        className="crm-section__subheadline"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.18 }}
      >
        Sin costos extra. Sin configuración técnica de tu parte.
      </motion.p>

      <motion.div
        className="crm-section__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {FEATURES.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="crm-feature"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="crm-feature__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="crm-feature__title">{item.title}</h3>
                <p className="crm-feature__text">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="crm-section__cta"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <Button variant="primary" onClick={() => openScheduleModal('CRM')}>
          Ver cómo funciona el CRM →
        </Button>
      </motion.div>
    </div>
  );
}
