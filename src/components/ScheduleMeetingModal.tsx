import { useState, useId } from 'react';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import {
  hasSubmittedFromThisDevice,
  markSubmittedFromThisDevice,
  createMeeting,
  type MeetingPayload,
} from '@/lib/meetings';
import { Button } from './ui';
import { cn } from '@/lib/utils';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'already_from_device' | 'error';

export function ScheduleMeetingModal() {
  const { isOpen, closeScheduleModal, preselectedPlan } = useScheduleMeeting();
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();
  const notesId = useId();

  const resetForm = () => {
    setGuestName('');
    setGuestEmail('');
    setGuestPhone('');
    setScheduledAt('');
    setNotes('');
    setStatus('idle');
    setErrorMessage('');
  };

  const handleClose = () => {
    resetForm();
    closeScheduleModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = guestEmail.trim();
    if (!email) {
      setStatus('error');
      setErrorMessage('El correo es obligatorio.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      if (hasSubmittedFromThisDevice()) {
        setStatus('already_from_device');
        return;
      }

      const date = scheduledAt ? new Date(scheduledAt) : new Date(Date.now() + 24 * 60 * 60 * 1000);
      const payload: MeetingPayload = {
        guestName: guestName.trim(),
        guestEmail: email,
        guestPhone: guestPhone.trim(),
        scheduledAt: date,
        duration: 30,
        notes: notes.trim(),
        plan: preselectedPlan ?? undefined,
      };

      await createMeeting(payload);
      markSubmittedFromThisDevice();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'No se pudo agendar. Intenta de nuevo.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="schedule-modal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="schedule-modal__box">
        <div className="schedule-modal__header">
          <h2 id="schedule-modal-title" className="schedule-modal__title">
            Agendar reunión
          </h2>
          <button
            type="button"
            className="schedule-modal__close"
            aria-label="Cerrar"
            onClick={handleClose}
          >
            ×
          </button>
        </div>

        {status === 'success' ? (
          <div className="schedule-modal__success">
            <p>Listo. Nos pondremos en contacto para confirmar día y hora.</p>
            <Button type="button" variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        ) : status === 'already_from_device' ? (
          <div className="schedule-modal__message schedule-modal__message--warning">
            <p>Ya has agendado una reunión desde este dispositivo. Si necesitas cambios, escríbenos por WhatsApp.</p>
            <Button type="button" variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="schedule-modal__form">
            {preselectedPlan && (
              <p className="schedule-modal__plan-badge">Plan: {preselectedPlan}</p>
            )}
            <div className="schedule-modal__field">
              <label htmlFor={nameId}>Nombre completo</label>
              <input
                id={nameId}
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>
            <div className="schedule-modal__field">
              <label htmlFor={emailId}>Correo electrónico *</label>
              <input
                id={emailId}
                type="email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="tu@correo.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="schedule-modal__field">
              <label htmlFor={phoneId}>Teléfono</label>
              <input
                id={phoneId}
                type="tel"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="+57 300 123 4567"
                autoComplete="tel"
              />
            </div>
            <div className="schedule-modal__field">
              <label htmlFor={dateId}>Fecha y hora preferida</label>
              <input
                id={dateId}
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>
            <div className="schedule-modal__field">
              <label htmlFor={notesId}>Notas (opcional)</label>
              <textarea
                id={notesId}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Cuéntanos brevemente tu negocio o qué te interesa."
                rows={3}
              />
            </div>
            {status === 'error' && errorMessage && (
              <p className="schedule-modal__error" role="alert">
                {errorMessage}
              </p>
            )}
            <div className="schedule-modal__actions">
              <Button type="button" variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                className={cn(status === 'loading' && 'schedule-modal__btn-loading')}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Agendar reunión'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
