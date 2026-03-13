import type { Message } from '@/types';
import { useState, useRef, useEffect, useCallback } from 'react';
import { streamChat } from '@/services/api';
import { WELCOME } from './constants';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const isPanelOpenRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  isPanelOpenRef.current = isPanelOpen;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isPanelOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
      setHasNewMessage(false);
    }
  }, [isPanelOpen]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const history: Message[] = [...messages, userMsg];

    setMessages(history);
    setInput('');
    setLoading(true);

    let accumulated = '';

    await streamChat(history, {
      onChunk: (delta) => {
        accumulated += delta;
        setMessages([...history, { role: 'assistant', content: accumulated }]);
      },
      onDone: () => {
        setLoading(false);
        if (!isPanelOpenRef.current) setHasNewMessage(true);
      },
      onError: (err) => {
        setLoading(false);
        setMessages([
          ...history,
          { role: 'assistant', content: err.message },
        ]);
        if (!isPanelOpenRef.current) setHasNewMessage(true);
      },
    });
  }, [messages, loading]);

  return {
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
  };
}
