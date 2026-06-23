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

  useEffect(() => {
    isPanelOpenRef.current = isPanelOpen;
  }, [isPanelOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus on open is a DOM side effect (no state writes here).
  useEffect(() => {
    if (!isPanelOpen) return;
    const id = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(id);
  }, [isPanelOpen]);

  const closePanel = useCallback(() => {
    setIsPanelOpen(false);
  }, []);

  const togglePanel = useCallback(() => {
    setIsPanelOpen((prev) => {
      if (!prev) setHasNewMessage(false);
      return !prev;
    });
  }, []);

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
    closePanel,
    togglePanel,
    hasNewMessage,
    sendMessage,
    bottomRef,
    inputRef,
  };
}
