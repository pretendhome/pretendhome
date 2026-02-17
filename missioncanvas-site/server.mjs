import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 8787);
const OPENCLAW_BASE_URL = process.env.OPENCLAW_BASE_URL || '';
const OPENCLAW_API_KEY = process.env.OPENCLAW_API_KEY || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const routes = [
  {
    id: 'RIU-001',
    name: 'Convergence & Scope Clarification',
    keywords: ['clarify', 'unclear', 'scope', 'direction', 'where do i start', 'confused', 'alignment'],
    agent: 'Yuty (Narrative) -> Rex (Architecture)',
    artifact: 'Convergence Brief',
    action: 'Define target outcome, non-goals, and first success metric.'
  },
  {
    id: 'RIU-014',
    name: 'Business Planning & Positioning',
    keywords: ['business plan', 'strategy', 'positioning', 'roadmap', 'model', 'offer', 'pricing'],
    agent: 'Rex (Architecture) + Yuty (Narrative)',
    artifact: 'Operating Plan v1',
    action: 'Build a one-page strategy, priorities, and 30-day execution plan.'
  },
  {
    id: 'RIU-039',
    name: 'Funding & Grants',
    keywords: ['grant', 'funding', 'loan', 'application', 'capital', 'subsidy', 'government'],
    agent: 'Argy (Research) + Theri (Build)',
    artifact: 'Funding Pipeline + Draft Applications',
    action: 'Generate funding list, eligibility matrix, and first application draft.'
  },
  {
    id: 'RIU-062',
    name: 'Build & Implementation',
    keywords: ['build', 'website', 'app', 'automation', 'system', 'implement', 'launch'],
    agent: 'Theri (Build) with Rex (Architecture)',
    artifact: 'Implementation Spec + Build Tasks',
    action: 'Convert plan into build tickets and delivery sequence.'
  },
  {
    id: 'RIU-073',
    name: 'Debug & Recovery',
    keywords: ['bug', 'error', 'broken', 'issue', 'fix', 'not working', 'failure'],
    agent: 'Raptor (Debug)',
    artifact: 'Root-Cause + Fix Plan',
    action: 'Identify failure point and define minimal corrective action.'
  }
];

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload, null, 2));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
}

function pickRoute(input) {
  const text = [input.objective, input.context, input.desired_outcome, input.constraints].join(' ').toLowerCase();
  let best = routes[0];
  let bestScore = -1;

  for (const route of routes) {
    let score = 0;
    for (const k of route.keywords) {
      if (text.includes(k)) score += k.includes(' ') ? 2 : 1;
    }
    if (score > bestScore) {
      best = route;
      bestScore = score;
    }
  }
  return { route: best, score: bestScore };
}

function detectOneWay(input) {
  const text = [input.objective, input.context, input.desired_outcome, input.constraints].join(' ').toLowerCase();
  return ['production deploy', 'delete database', 'drop table', 'delete data', 'irreversible', 'migrate live'].some((x) => text.includes(x));
}

function makeBrief(input, route, oneWay) {
  const date = new Date().toISOString().slice(0, 10);
  return [
    '# MissionCanvas Action Brief',
    '',
    `Date: ${date}`,
    `Route: ${route.id} - ${route.name}`,
    `Primary Agent: ${route.agent}`,
    '',
    '## Input',
    `Objective: ${input.objective || 'N/A'}`,
    `Context: ${input.context || 'N/A'}`,
    `Desired Outcome: ${input.desired_outcome || 'N/A'}`,
    `Constraints: ${input.constraints || 'N/A'}`,
    '',
    '## Execution',
    `One-Way Door: ${oneWay ? 'DETECTED - HUMAN CONFIRMATION REQUIRED' : 'None detected'}`,
    `Next Artifact: ${route.artifact}`,
    `Immediate Action: ${route.action}`,
    '',
    '## Checks',
    '- Verify convergence completeness',
    '- Verify reversibility before execution',
    '- Validate first artifact quality'
  ].join('\n');
}

function localRouteResponse(payload) {
  const input = payload.input || {};
  const { route } = pickRoute(input);
  const oneWay = detectOneWay(input);
  const brief = makeBrief(input, route, oneWay);

  return {
    request_id: payload.request_id || crypto.randomUUID(),
    status: oneWay ? 'needs_confirmation' : 'ok',
    convergence: {
      complete: Boolean(input.objective && input.desired_outcome),
      goal: input.desired_outcome || 'UNKNOWN',
      roles: 'Human intent + bounded agent execution',
      capabilities: 'Argy/Rex/Theri/Raptor/Yuty/Anky/Para',
      constraints: input.constraints || 'None provided',
      non_goals: 'Unapproved irreversible actions',
      missing_fields: []
    },
    routing: {
      candidate_rius: [
        {
          riu_id: route.id,
          name: route.name,
          match_strength: 'STRONG',
          matched_signals: ['keyword_match']
        }
      ],
      selected_rius: [
        {
          riu_id: route.id,
          name: route.name,
          why_now: 'Best signal match for current objective/context.'
        }
      ],
      agent_map: [
        {
          agent: route.agent,
          task: route.action,
          maturity: 'UNVALIDATED',
          human_required: true
        }
      ]
    },
    one_way_door: {
      detected: oneWay,
      items: oneWay
        ? [
            {
              decision_id: 'OWD-001',
              description: 'Potential irreversible action detected',
              reason: 'Palette policy requires explicit human confirmation',
              requires_confirmation: true
            }
          ]
        : []
    },
    artifacts: {
      to_create: [route.artifact],
      to_update: []
    },
    validation_checks: ['Verify convergence', 'Check reversibility', 'Validate artifact'],
    action_brief_markdown: brief,
    decision_log_payload: `Route=${route.id}; Agent=${route.agent}; OWD=${oneWay}`,
    knowledge_gap: {
      detected: false,
      what_is_missing: [],
      required_retrieval: []
    }
  };
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
  return await res.json();
}

async function serveStatic(req, res) {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  const fullPath = path.join(__dirname, reqPath);
  if (!fullPath.startsWith(__dirname) || !existsSync(fullPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const ext = path.extname(fullPath);
  const content = await readFile(fullPath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  res.end(content);
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/v1/missioncanvas/route') {
      const payload = await readBody(req);
      if (!payload.input || !payload.input.objective) {
        json(res, 400, {
          request_id: payload.request_id || null,
          status: 'error',
          error: {
            code: 'VALIDATION_ERROR',
            message: 'input.objective is required',
            retryable: true,
            details: ['Missing input.objective']
          }
        });
        return;
      }

      try {
        const proxied = await proxyToOpenClaw(payload);
        json(res, 200, proxied);
      } catch (_proxyErr) {
        json(res, 200, localRouteResponse(payload));
      }
      return;
    }

    if (req.method === 'POST' && req.url === '/v1/missioncanvas/confirm-one-way-door') {
      const payload = await readBody(req);
      json(res, 200, {
        request_id: payload.request_id || null,
        status: 'approved',
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
