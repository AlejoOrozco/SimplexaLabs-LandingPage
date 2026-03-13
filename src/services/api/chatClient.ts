import type { Message } from '@/types';

const API_BASE = typeof import.meta.env.VITE_API_URL === 'string' ? import.meta.env.VITE_API_URL : '';

export interface StreamChatCallbacks {
  onChunk: (text: string) => void;
  onDone: () => void;
  onError: (error: Error) => void;
}

/**
 * Stream chat completion from the backend. Proxied in dev to groq-server;
 * in production set VITE_API_URL if the API is on another origin.
 */
export async function streamChat(
  messages: Message[],
  { onChunk, onDone, onError }: StreamChatCallbacks
): Promise<void> {
  const url = `${API_BASE}/api/chat`;
  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
  } catch (err) {
    onError(err instanceof Error ? err : new Error(String(err)));
    return;
  }

  if (!res.ok) {
    onError(new Error(res.status === 500 ? 'Error al conectar con el asesor. Intenta de nuevo.' : 'Network error'));
    return;
  }

  const body = res.body;
  if (!body) {
    onError(new Error('No response body'));
    return;
  }

  const reader = body.getReader();
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const delta = decoder.decode(value, { stream: true });
      if (delta) onChunk(delta);
    }
    onDone();
  } catch (err) {
    onError(err instanceof Error ? err : new Error(String(err)));
  }
}
