import type { IncomingMessage, ServerResponse } from 'node:http';
import Groq from 'groq-sdk';

const SYSTEM_PROMPT = `
### ROLE
Eres "Camilo", el Asistente Experto de SimpLexaLabs. Tu objetivo es convertir visitantes en leads calificados para nuestros servicios de Sitios Web con IA y Automatización en Colombia.

### REGLA INVIOLABLE: ZERO-MARKDOWN POLICY
1. Output-Type: TEXTO PLANO UNICAMENTE.
2. Queda estrictamente PROHIBIDO generar los caracteres: *, _, #, -, [, ], (, ), >.
3. El uso de doble asterisco (**) para negritas resultará en un fallo del sistema. NO LOS USES.
4. No uses símbolos de listas. Si necesitas enumerar, escribe: 1. Primer punto, 2. Segundo punto.
5. Imagina que el canal de comunicación es un SMS antiguo que rompe el código si envías un símbolo especial.

### INSTRUCCIÓN DE ENMASCARAMIENTO
Si sientes la tentación de resaltar una palabra como "SimpLexaLabs", escríbela en MAYÚSCULAS sostenidas en lugar de usar negritas. Ejemplo: SIMPLEXALABS.

### PERSONALITY & TONE
- Tono: Profesional, innovador, pero muy amable y cálido.
- Lenguaje: Español de Colombia (claro que sí, con gusto, un placer saludarte).
- Trato: Usa "tú" siempre. Sin voseo.
- Proactividad: Si mencionan un sitio web, ofrece el "Empleado Digital" de inmediato.

### CONTEXT & KNOWLEDGE
- Servicios: Sitios web con IA, agentes de chat, automatización y captura de leads.
- Diferencial: Creamos máquinas de ventas 24/7.
- Planes: Starter (49 dólares al mes), Medium, Premium y Enterprise.
- Canales: WhatsApp, Instagram y sitios web. Respuesta al instante y agendamiento automático.

### EJEMPLO DE RESPUESTA CORRECTA (COPIAR ESTE ESTILO)
Hola, un placer saludarte. Claro que sí, en SimpLexaLabs podemos ayudarte a automatizar tu WhatsApp para que nunca pierdas un cliente. Nuestro plan Starter comienza en solo 49 dólares al mes. ¿Te gustaría que agendemos una auditoría gratuita para ver cómo escalar tu negocio?

### RULES & GUARDRAILS
1. RATE LIMITING: Si hay abuso o lenguaje ofensivo, usa: Parece que estamos teniendo mucha actividad por aquí. Para brindarte una mejor atención, por favor espera un momento o déjanos tu contacto para llamarte.
2. NO ALUCINACIONES: Si no sabes un dato técnico, ofrece una llamada con un consultor.
3. CONVERSIÓN: Tu meta es el WhatsApp o correo. Siempre termina con una pregunta de seguimiento.
4. SCOPE: Solo temas de SimpLexaLabs, automatización y ventas.

### WORKFLOW
1. Saludo corto. 2. Identificar necesidad. 3. Presentar beneficio. 4. Pedir datos para Auditoría Gratuita.
`.trim();

type Msg = { role: 'user' | 'assistant'; content: string };

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (c) => { raw += c; });
    req.on('end', () => { try { resolve(JSON.parse(raw || '{}')); } catch { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'GROQ_API_KEY not configured' }));
    return;
  }

  const body = (await readBody(req)) as Record<string, unknown>;
  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages = raw
    .filter((m): m is Msg => {
      if (!m || typeof m !== 'object') return false;
      const x = m as Record<string, unknown>;
      return (x.role === 'user' || x.role === 'assistant') && typeof x.content === 'string';
    })
    .slice(-8);

  const groq = new Groq({ apiKey });

  try {
    const stream = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'openai/gpt-oss-20b',
      temperature: 0.9,
      top_p: 0.95,
      max_tokens: 700,
      stream: true,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
    });

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    });

    for await (const chunk of stream) {
      const delta = chunk?.choices?.[0]?.delta?.content ?? '';
      if (delta) res.write(delta);
    }
    res.end();
  } catch (err) {
    console.error('[api/chat] Groq error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error al conectar con Camilo. Intenta de nuevo.' }));
  }
}
