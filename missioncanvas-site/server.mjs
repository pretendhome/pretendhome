import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
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
const OPENCLAW_API_KEY = process.env.OPENCLAW_API_KEY || '';
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*';

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

async function proxyToOpenClaw(payload) {
  if (!OPENCLAW_BASE_URL) return null;
  const target = `${OPENCLAW_BASE_URL.replace(/\/$/, '')}/v1/missioncanvas/route`;
  const headers = { 'Content-Type': 'application/json' };
  if (OPENCLAW_API_KEY) headers.Authorization = `Bearer ${OPENCLAW_API_KEY}`;

  const res = await fetch(target, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`OpenClaw upstream ${res.status}`);
  }

  const proxied = await res.json();
  if (!proxied.request_id) proxied.request_id = payload.request_id || makeRequestId();
  if (!proxied.source) proxied.source = 'openclaw';
  return proxied;
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
    openclaw_base_url: OPENCLAW_BASE_URL || null,
    version: '1.1.0'
  };
}

function capabilitiesPayload() {
  return {
    routes: ROUTES.map((r) => ({ id: r.id, name: r.name, agent: r.agent, artifact: r.artifact })),
    one_way_door_gate: true,
    voice_input: 'browser_web_speech',
    voice_output: 'speech_synthesis'
  };
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
        json(res, 200, proxied);
      } catch (_proxyErr) {
        json(res, 200, localRouteResponse(payload, 'local_fallback'));
      }
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
    console.log(`Proxy mode enabled -> ${OPENCLAW_BASE_URL}`);
  } else {
    console.log('Proxy mode disabled -> using local Palette route fallback');
  }
});
