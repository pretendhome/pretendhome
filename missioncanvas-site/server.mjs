import { createServer } from 'node:http';
import { readFile, appendFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  localRouteResponse,
  makeRequestId,
  validateRoutePayload,
  ROUTES
} from './openclaw_adapter_core.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 8787);
const OPENCLAW_BASE_URL = process.env.OPENCLAW_BASE_URL || '';
const OPENCLAW_API_KEY = process.env.OPENCLAW_API_KEY || process.env.OPENCLAW_GATEWAY_TOKEN || '';
const OPENCLAW_UPSTREAM_MODE = (process.env.OPENCLAW_UPSTREAM_MODE || 'missioncanvas').toLowerCase();
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'main';
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*';
const DECISIONS_LOG_PATH = process.env.MISSIONCANVAS_DECISIONS_LOG_PATH || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function applyCors(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

function json(res, status, payload) {
  applyCors(res);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload, null, 2));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf-8');
  try {
    return raw ? JSON.parse(raw) : {};
  } catch (_err) {
    return { __parse_error__: true };
  }
}

function briefPromptFromPayload(payload) {
  const input = payload.input || {};
  return [
    'You are MissionCanvas runtime wrapped around Palette policy.',
    'Return concise plain text with:',
    '- Convergence summary',
    '- Recommended next action',
    '- Risks and one-way-door cautions',
    '',
    `Objective: ${input.objective || ''}`,
    `Context: ${input.context || ''}`,
    `Desired Outcome: ${input.desired_outcome || ''}`,
    `Constraints: ${input.constraints || ''}`,
    `Risk posture: ${input.risk_posture || 'medium'}`
  ].join('\n');
}

function extractTextFromGateway(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;

  // OpenResponses-like shapes
  if (Array.isArray(obj.output)) {
    const texts = [];
    for (const item of obj.output) {
      if (item?.type === 'output_text' && item?.text) texts.push(item.text);
      if (Array.isArray(item?.content)) {
        for (const c of item.content) {
          if (c?.type === 'output_text' && c?.text) texts.push(c.text);
          if (c?.type === 'text' && c?.text) texts.push(c.text);
        }
      }
    }
    if (texts.length) return texts.join('\n');
  }

  // Chat Completions-like shapes
  if (Array.isArray(obj.choices)) {
    const texts = obj.choices
      .map((c) => c?.message?.content)
      .filter(Boolean)
      .map((c) => (typeof c === 'string' ? c : JSON.stringify(c)));
    if (texts.length) return texts.join('\n');
  }

  if (typeof obj.text === 'string') return obj.text;
  if (typeof obj.content === 'string') return obj.content;

  return '';
}

async function fetchJson(url, payload, headers = {}) {
  const mergedHeaders = { 'Content-Type': 'application/json', ...headers };
  const res = await fetch(url, {
    method: 'POST',
    headers: mergedHeaders,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`OpenClaw upstream ${res.status}`);
  }
  return await res.json();
}

async function proxyToOpenClaw(payload) {
  if (!OPENCLAW_BASE_URL) return null;
  const base = OPENCLAW_BASE_URL.replace(/\/$/, '');
  const headers = {};
  if (OPENCLAW_API_KEY) headers.Authorization = `Bearer ${OPENCLAW_API_KEY}`;

  if (OPENCLAW_UPSTREAM_MODE === 'missioncanvas') {
    const proxied = await fetchJson(`${base}/v1/missioncanvas/route`, payload, headers);
    if (!proxied.request_id) proxied.request_id = payload.request_id || makeRequestId();
    if (!proxied.source) proxied.source = 'openclaw_missioncanvas';
    return proxied;
  }

  if (OPENCLAW_UPSTREAM_MODE === 'responses') {
    const upstreamPayload = {
      model: `openclaw:${OPENCLAW_AGENT_ID}`,
      input: briefPromptFromPayload(payload)
    };
    const raw = await fetchJson(`${base}/v1/responses`, upstreamPayload, headers);
    const txt = extractTextFromGateway(raw);
    const out = localRouteResponse(payload, 'openclaw_responses');
    if (txt) out.action_brief_markdown = `${out.action_brief_markdown}\n\n## OpenClaw Model Notes\n${txt}`;
    return out;
  }

  if (OPENCLAW_UPSTREAM_MODE === 'chatcompletions') {
    const upstreamPayload = {
      model: `openclaw:${OPENCLAW_AGENT_ID}`,
      messages: [
        { role: 'system', content: 'You are MissionCanvas runtime wrapped around Palette policy.' },
        { role: 'user', content: briefPromptFromPayload(payload) }
      ]
    };
    const raw = await fetchJson(`${base}/v1/chat/completions`, upstreamPayload, headers);
    const txt = extractTextFromGateway(raw);
    const out = localRouteResponse(payload, 'openclaw_chatcompletions');
    if (txt) out.action_brief_markdown = `${out.action_brief_markdown}\n\n## OpenClaw Model Notes\n${txt}`;
    return out;
  }

  throw new Error(`Unsupported OPENCLAW_UPSTREAM_MODE: ${OPENCLAW_UPSTREAM_MODE}`);
}

async function serveStatic(req, res) {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  const fullPath = path.resolve(__dirname, `.${reqPath}`);
  if (!fullPath.startsWith(__dirname) || !existsSync(fullPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const ext = path.extname(fullPath);
  const content = await readFile(fullPath);
  applyCors(res);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  res.end(content);
}

function healthPayload() {
  return {
    status: 'ok',
    service: 'missioncanvas-openclaw-adapter',
    mode: OPENCLAW_BASE_URL ? 'proxy' : 'local_fallback',
    upstream_mode: OPENCLAW_UPSTREAM_MODE,
    openclaw_base_url: OPENCLAW_BASE_URL || null,
    version: '1.2.0'
  };
}

function capabilitiesPayload() {
  return {
    routes: ROUTES.map((r) => ({ id: r.id, name: r.name, agent: r.agent, artifact: r.artifact })),
    one_way_door_gate: true,
    voice_input: 'browser_web_speech + terminal_bridge',
    voice_output: 'speech_synthesis + terminal_tts_optional',
    upstream_modes: ['missioncanvas', 'responses', 'chatcompletions'],
    decision_log_append: Boolean(DECISIONS_LOG_PATH)
  };
}

async function appendDecisionLogEntry(payload) {
  if (!DECISIONS_LOG_PATH) {
    return { ok: false, message: 'Decision log path not configured (MISSIONCANVAS_DECISIONS_LOG_PATH).' };
  }
  const target = path.resolve(DECISIONS_LOG_PATH);
  const parent = path.dirname(target);
  await mkdir(parent, { recursive: true });

  const timestamp = new Date().toISOString();
  const block = [
    '',
    '---',
    `### Engagement Update: ${timestamp} / ${payload.request_id || makeRequestId()}`,
    '',
    '#### MissionCanvas Log Payload',
    payload.decision_log_payload || '(missing payload)',
    '',
    '#### Brief',
    payload.action_brief_markdown || '(missing brief)',
    ''
  ].join('\n');

  await appendFile(target, block, { encoding: 'utf-8' });
  return { ok: true, message: `Appended to ${target}` };
}

async function writeStreamedRoute(req, res) {
  const payload = await readBody(req);
  if (payload.__parse_error__) {
    json(res, 400, {
      request_id: null,
      status: 'error',
      error: { code: 'VALIDATION_ERROR', message: 'Request body must be valid JSON', retryable: true, details: ['Invalid JSON'] }
    });
    return;
  }

  const errors = validateRoutePayload(payload);
  if (errors.length) {
    json(res, 400, {
      request_id: payload.request_id || null,
      status: 'error',
      error: { code: 'VALIDATION_ERROR', message: 'Invalid request payload', retryable: true, details: errors }
    });
    return;
  }
  if (!payload.request_id) payload.request_id = makeRequestId();

  let routed;
  try {
    routed = await proxyToOpenClaw(payload);
    if (!routed) routed = localRouteResponse(payload, 'local_fallback');
  } catch (_err) {
    routed = localRouteResponse(payload, 'local_fallback');
  }

  const brief = routed.action_brief_markdown || '';
  const pieces = brief.split('\n');

  applyCors(res);
  res.writeHead(200, {
    'Content-Type': 'application/x-ndjson; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive'
  });

  for (const line of pieces) {
    const evt = { type: 'chunk', text: `${line}\n` };
    res.write(`${JSON.stringify(evt)}\n`);
  }
  res.write(`${JSON.stringify({ type: 'final', response: routed })}\n`);
  res.end();
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === 'OPTIONS') {
      applyCors(res);
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method === 'GET' && req.url === '/v1/missioncanvas/health') {
      json(res, 200, healthPayload());
      return;
    }

    if (req.method === 'GET' && req.url === '/v1/missioncanvas/capabilities') {
      json(res, 200, capabilitiesPayload());
      return;
    }

    if (req.method === 'POST' && req.url === '/v1/missioncanvas/route') {
      const payload = await readBody(req);
      if (payload.__parse_error__) {
        json(res, 400, {
          request_id: null,
          status: 'error',
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Request body must be valid JSON',
            retryable: true,
            details: ['Invalid JSON']
          }
        });
        return;
      }

      const errors = validateRoutePayload(payload);
      if (errors.length) {
        json(res, 400, {
          request_id: payload.request_id || null,
          status: 'error',
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request payload',
            retryable: true,
            details: errors
          }
        });
        return;
      }

      if (!payload.request_id) payload.request_id = makeRequestId();

      try {
        const proxied = await proxyToOpenClaw(payload);
        json(res, 200, proxied ?? localRouteResponse(payload, 'local_fallback'));
      } catch (_proxyErr) {
        json(res, 200, localRouteResponse(payload, 'local_fallback'));
      }
      return;
    }

    if (req.method === 'POST' && req.url === '/v1/missioncanvas/talk-stream') {
      await writeStreamedRoute(req, res);
      return;
    }

    if (req.method === 'POST' && req.url === '/v1/missioncanvas/confirm-one-way-door') {
      const payload = await readBody(req);
      if (payload.__parse_error__) {
        json(res, 400, {
          status: 'error',
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Request body must be valid JSON',
            retryable: true,
            details: ['Invalid JSON']
          }
        });
        return;
      }

      json(res, 200, {
        request_id: payload.request_id || null,
        status: 'approved',
        source: OPENCLAW_BASE_URL ? 'proxy' : 'local_fallback',
        next_step: 'resume_execution',
        message: 'One-way-door confirmation recorded.'
      });
      return;
    }

    if (req.method === 'POST' && req.url === '/v1/missioncanvas/log-append') {
      const payload = await readBody(req);
      if (payload.__parse_error__) {
        json(res, 400, {
          status: 'error',
          message: 'Request body must be valid JSON'
        });
        return;
      }
      const result = await appendDecisionLogEntry(payload);
      if (!result.ok) {
        json(res, 400, { status: 'error', message: result.message });
      } else {
        json(res, 200, { status: 'ok', message: result.message });
      }
      return;
    }

    await serveStatic(req, res);
  } catch (err) {
    json(res, 500, {
      status: 'error',
      error: {
        code: 'RUNTIME_ERROR',
        message: err.message,
        retryable: false,
        details: []
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`MissionCanvas server running at http://localhost:${PORT}`);
  if (OPENCLAW_BASE_URL) {
    console.log(`Proxy mode enabled -> ${OPENCLAW_BASE_URL} (${OPENCLAW_UPSTREAM_MODE})`);
  } else {
    console.log('Proxy mode disabled -> using local Palette route fallback');
  }
});
