/**
 * Chat feature types (assistant widget, streamed responses).
 */

export type ChatMessageRole = 'user' | 'assistant';

export interface Message {
  role: ChatMessageRole;
  content: string;
}
