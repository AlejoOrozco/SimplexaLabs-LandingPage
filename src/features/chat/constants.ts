import type { Message } from '@/types';

export const WELCOME: Message = {
  role: 'assistant',
  content:
    '¡Un placer saludarte! 👋 Soy Camilo, tu asesor de SimpLexaLabs. Cuéntame, ¿qué tipo de negocio tienes? Con gusto te muestro cómo podemos convertirlo en una máquina de ventas que trabaja 24/7.',
};

export const SUGGESTED = [
  '¿Cómo funciona el empleado digital?',
  '¿Cuánto cuesta?',
  '¿Funciona para mi tipo de negocio?',
] as const;
