import { useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useChat } from './useChat';
import { SUGGESTED } from './constants';

function TypingDots() {
  return (
    <span className="chat-typing" aria-label="Escribiendo…">
      <span />
      <span />
      <span />
    </span>
  );
}

export function ChatWidget() {
  const fabRef = useRef<HTMLButtonElement>(null);
  const {
    messages,
    input,
    setInput,
    loading,
    isPanelOpen,
    setIsPanelOpen,
    hasNewMessage,
    sendMessage,
    bottomRef,
    inputRef,
  } = useChat();

  const handleClose = useCallback(() => {
    setIsPanelOpen(false);
    setTimeout(() => fabRef.current?.focus(), 0);
  }, [setIsPanelOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
      }
    },
    [input, sendMessage]
  );

  return (
    <>
      <div className="chat-fab-wrap">
        <AnimatePresence>
          {!isPanelOpen && (
            <motion.div
              className="chat-fab__tooltip"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              ¡Prueba nuestro agente acá!
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isPanelOpen && hasNewMessage && (
            <motion.span
              className="chat-fab__badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              1
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          ref={fabRef}
          type="button"
          className="chat-fab"
          aria-label={isPanelOpen ? 'Cerrar asesor' : 'Hablar con el asesor IA'}
          onClick={() => setIsPanelOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={
            isPanelOpen
              ? {}
              : {
                  boxShadow: [
                    '0 0 0 0 rgba(124,58,237,0.5)',
                    '0 0 0 14px rgba(124,58,237,0)',
                    '0 0 0 0 rgba(124,58,237,0)',
                  ],
                }
          }
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isPanelOpen ? (
              <motion.span
                key="close"
                className="chat-fab__icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="open"
                className="chat-fab__icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                💬
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Asesor SimpLexaLabs"
            aria-modal="true"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          >
            <div className="chat-panel__header">
              <div className="chat-panel__avatar" aria-hidden="true">
                S
              </div>
              <div>
                <p className="chat-panel__name">Camilo · SimpLexaLabs</p>
                <p className="chat-panel__status">
                  <span className="chat-panel__dot" />
                  En línea · responde al instante
                </p>
              </div>
              <button
                type="button"
                className="chat-panel__close"
                onClick={handleClose}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div
              className="chat-panel__messages"
              role="log"
              aria-live="polite"
              aria-label="Mensajes de la conversación"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble chat-bubble--${msg.role}`}
                >
                  {msg.content === '' && msg.role === 'assistant' ? (
                    <TypingDots />
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              ))}
              {loading && (
                <div className="chat-bubble chat-bubble--assistant">
                  <TypingDots />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length === 1 && (
              <div className="chat-panel__suggested">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="chat-suggested-pill"
                    onClick={() => sendMessage(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="chat-panel__input-row">
              <textarea
                ref={inputRef}
                className="chat-panel__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje…"
                rows={1}
                disabled={loading}
                aria-label="Escribe tu mensaje"
              />
              <button
                type="button"
                className="chat-panel__send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                aria-label="Enviar"
              >
                <Send size={18} strokeWidth={2.2} aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
