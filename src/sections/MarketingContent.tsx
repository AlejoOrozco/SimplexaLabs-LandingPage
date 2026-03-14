import { motion } from 'motion/react';
import { Button } from '../components';
import { Instagram, Megaphone, Video, Mail } from 'lucide-react';

const ITEMS = [
  {
    icon: Instagram,
    title: 'Posts para Instagram y Facebook',
    text: 'Diseñados con la voz y estilo de tu marca. Listos para publicar. Cada semana.',
  },
  {
    icon: Megaphone,
    title: 'Ads de pago para Facebook e Instagram',
    text: 'Creativos para campañas de captación de leads. Adaptados a tu industria y audiencia.',
  },
  {
    icon: Video,
    title: 'Contenido para Reels y TikTok',
    text: 'Scripts e ideas de video adaptadas a tu negocio. Contenido que atrae y convierte.',
  },
  {
    icon: Mail,
    title: 'Emails y mensajes de seguimiento',
    text: 'Templates personalizados para nutrir tus leads. Conectados directamente a tu CRM.',
  },
];

export function MarketingContent() {
  return (
    <div className="section__inner marketing-content__inner">
      <motion.h2
        className="section__title marketing-content__title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        No más &quot;no sé qué publicar hoy&quot;.
      </motion.h2>
      <motion.p
        className="marketing-content__headline"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Tu contenido de marketing, listo cada mes.
      </motion.p>
      <motion.p
        className="marketing-content__subtitle"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        Incluido en los planes Growth, Pro y Scale — sin costo adicional.
      </motion.p>
      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.16 }}
      >
        Parte de nuestro servicio es crear automáticamente los posts, ads y contenido que tu negocio necesita para atraer más clientes — sin que tú dediques horas a pensarlo.
      </motion.p>

      <motion.div
        className="marketing-content__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="marketing-content__card"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="marketing-content__card-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <h3 className="marketing-content__card-title">{item.title}</h3>
              <p className="marketing-content__card-text">{item.text}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="marketing-content__cierre"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Todo generado con inteligencia artificial, ajustado a tu marca, entregado mensualmente. Tú solo publicas.
      </motion.p>
      <motion.div
        className="marketing-content__cta"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.25 }}
      >
        <Button href="#pricing" variant="primary">
          Ver qué incluye cada plan →
        </Button>
      </motion.div>
    </div>
  );
}
