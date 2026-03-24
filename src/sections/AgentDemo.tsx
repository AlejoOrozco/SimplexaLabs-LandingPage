import { Zap } from 'lucide-react';

/**
 * Mock de conversación WhatsApp + IA — muestra qué hace el agente (responder, agendar, CRM).
 */
export function AgentDemo() {
  return (
    <div className="section__inner agent-demo__inner">
      <p className="agent-demo__eyebrow">Tu agente en acción</p>
      <h2 className="section__title agent-demo__heading">Así atiende tu empleado digital en WhatsApp</h2>
      <p className="section__subtitle agent-demo__lead">
        Ejemplo tipo clínica: el visitante escribe, el agente responde al instante, confirma la cita y deja el lead
        registrado en el CRM — sin que tu recepción tenga que estar pegada al teléfono.
      </p>

      <div
        className="agent-demo__window"
        role="region"
        aria-label="Ejemplo de conversación de WhatsApp con asistente de IA"
      >
        <div className="agent-demo__titlebar">
          <span className="agent-demo__traffic" aria-hidden="true">
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--red" />
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--yellow" />
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--green" />
          </span>
          <span className="agent-demo__titlebar-label">WhatsApp — Tu Clínica</span>
        </div>

        <div className="agent-demo__chat">
          <div className="agent-demo__msg agent-demo__msg--user">
            <div className="agent-demo__bubble agent-demo__bubble--user">
              <p>Hola! Quiero saber si tienen cita disponible para mañana a las 3pm 🙏</p>
            </div>
            <div className="agent-demo__avatar agent-demo__avatar--user" aria-hidden="true">
              P
            </div>
          </div>

          <div className="agent-demo__msg agent-demo__msg--ai">
            <div className="agent-demo__avatar agent-demo__avatar--ai" aria-hidden="true">
              AI
            </div>
            <div className="agent-demo__bubble agent-demo__bubble--ai">
              <p>
                ¡Hola! Soy el asistente de Clínica Sonrisa 😊 Claro, tenemos disponibilidad mañana a las 3:00pm con la
                Dra. Martínez. ¿Confirmo la cita a tu nombre?
              </p>
              <p className="agent-demo__meta">
                <Zap className="agent-demo__meta-icon" size={14} aria-hidden />
                <span>Respondió en 4 seg</span>
              </p>
            </div>
          </div>

          <div className="agent-demo__msg agent-demo__msg--user">
            <div className="agent-demo__bubble agent-demo__bubble--user">
              <p>Sí, a nombre de Patricia López</p>
            </div>
            <div className="agent-demo__avatar agent-demo__avatar--user" aria-hidden="true">
              P
            </div>
          </div>

          <div className="agent-demo__msg agent-demo__msg--ai">
            <div className="agent-demo__avatar agent-demo__avatar--ai" aria-hidden="true">
              AI
            </div>
            <div className="agent-demo__bubble agent-demo__bubble--ai agent-demo__bubble--success">
              <p>
                ✅ ¡Perfecto, Patricia! Tu cita está confirmada: <strong>mañana a las 3:00pm</strong>. Te enviaré un
                recordatorio 2 horas antes. ¿Necesitas indicaciones para llegar?
              </p>
            </div>
          </div>
        </div>

        <div className="agent-demo__crm">
          <span className="agent-demo__crm-dot" aria-hidden="true" />
          <span>
            CRM: Nuevo lead capturado — <strong>Patricia López</strong> · Cita confirmada · Pipeline: Agendado
          </span>
        </div>
      </div>
    </div>
  );
}
