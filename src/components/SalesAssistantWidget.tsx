import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Message = {
  role: 'assistant',
  content: '¡Un placer saludarte! 👋 Soy Camilo, tu asesor de SimpLexaLabs. Cuéntame, ¿qué tipo de negocio tienes? Con gusto te muestro cómo podemos convertirlo en una máquina de ventas que trabaja 24/7.',
};

const SUGGESTED = [
  '¿Cómo funciona el empleado digital?',
  '¿Cuánto cuesta?',
  '¿Funciona para mi tipo de negocio?',
];

function TypingDots() {
  return (
    <span className="chat-typing" aria-label="Escribiendo…">
      <span /><span /><span />
    </span>
  );
}

export function SalesAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  /* Focus input when opening */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
      setHasNew(false);
    }
  }, [open]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const history = [...messages, userMsg];

    setMessages(history);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) throw new Error('Network error');

      /* Stream the response */
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages([...history, { role: 'assistant', content: '' }]);
      setLoading(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: assistantText }]);
      }

      if (!open) setHasNew(true);
    } catch {
      setLoading(false);
      setMessages([...history, {
        role: 'assistant',
        content: 'Tuve un problema al conectarme. ¿Puedes intentarlo de nuevo?',
      }]);
    }
  }, [messages, loading, open]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* FAB button */}
      <div className="chat-fab-wrap">
        {/* Tooltip — above the FAB, only when closed */}
        <AnimatePresence>
          {!open && (
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
          {!open && hasNew && (
            <motion.span
              className="chat-fab__badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >1</motion.span>
          )}
        </AnimatePresence>

        <motion.button
          className="chat-fab"
          aria-label={open ? 'Cerrar asesor' : 'Hablar con el asesor IA'}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={open ? {} : { boxShadow: ['0 0 0 0 rgba(124,58,237,0.5)', '0 0 0 14px rgba(124,58,237,0)', '0 0 0 0 rgba(124,58,237,0)'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="close" className="chat-fab__icon"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}>
                ✕
              </motion.span>
            ) : (
              <motion.span key="open" className="chat-fab__icon"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}>
                💬
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Asesor SimpLexaLabs"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          >
            {/* Header */}
            <div className="chat-panel__header">
              <div className="chat-panel__avatar" aria-hidden="true">S</div>
              <div>
                <p className="chat-panel__name">Camilo · SimpLexaLabs</p>
                <p className="chat-panel__status">
                  <span className="chat-panel__dot" />
                  En línea · responde al instante
                </p>
              </div>
              <button className="chat-panel__close" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
            </div>

            {/* Messages */}
            <div className="chat-panel__messages" role="log">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-bubble chat-bubble--${msg.role}`}>
                  {msg.content === '' && msg.role === 'assistant'
                    ? <TypingDots />
                    : <p>{msg.content}</p>
                  }
                </div>
              ))}
              {loading && (
                <div className="chat-bubble chat-bubble--assistant">
                  <TypingDots />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggested — only shown once at start */}
            {messages.length === 1 && (
              <div className="chat-panel__suggested">
                {SUGGESTED.map((s) => (
                  <button key={s} className="chat-suggested-pill" onClick={() => sendMessage(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chat-panel__input-row">
              <textarea
                ref={inputRef}
                className="chat-panel__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Escribe tu mensaje…"
                rows={1}
                disabled={loading}
                aria-label="Escribe tu mensaje"
              />
              <button
                className="chat-panel__send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                aria-label="Enviar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
