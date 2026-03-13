import { createServer } from 'node:http';
import Groq from 'groq-sdk';

if (!process.env.GROQ_API_KEY) {
  console.error('Missing GROQ_API_KEY in environment (.env).');
  process.exit(1);
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const PORT = Number(process.env.PORT) || 5174;

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

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

function json(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(data));
}

const server = createServer(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/health') {
    return json(res, 200, { ok: true });
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    const body = await readJson(req);
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const safeMessages = messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8);

    const payload = {
      model: process.env.GROQ_MODEL || 'openai/gpt-oss-20b',
      temperature: 0.9,
      top_p: 0.95,
      max_tokens: 700,
      stream: true,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...safeMessages],
    };

    try {
      const stream = await groq.chat.completions.create(payload);

      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
        'Access-Control-Allow-Origin': '*',
      });

      for await (const chunk of stream) {
        const delta = chunk?.choices?.[0]?.delta?.content || '';
        if (delta) res.write(delta);
      }

      res.end();
    } catch (err) {
      console.error('[groq-server] Error:', err);
      json(res, 500, { error: 'Error al conectar con el asesor. Intenta de nuevo.' });
    }
    return;
  }

  json(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`✅ Groq server listening on http://localhost:${PORT}`);
  console.log(`   Model: ${process.env.GROQ_MODEL || 'openai/gpt-oss-20b'}`);
});
