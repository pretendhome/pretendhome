import { randomUUID } from 'node:crypto';

export const ROUTES = [
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

const OWD_TERMS = [
  // Technical irreversibility
  'production deploy', 'delete database', 'drop table', 'delete data', 'irreversible', 'migrate live',
  'no rollback',
  // Business-level irreversibility
  'migrate all', 'decommission', 'multi-year contract', 'auto-execution', 'replace human',
  'single provider', 'one ai provider', 'centralize all', 'automated decisions', 'commit to a multi',
];

export function makeRequestId() {
  return randomUUID();
}

export function validateRoutePayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    errors.push('Payload must be an object');
    return errors;
  }

  if (!payload.input || typeof payload.input !== 'object') {
    errors.push('input object is required');
    return errors;
  }

  if (!payload.input.objective || typeof payload.input.objective !== 'string' || !payload.input.objective.trim()) {
    errors.push('input.objective is required');
  }

  const rp = payload.input.risk_posture;
  if (rp && !['low', 'medium', 'high'].includes(rp)) {
    errors.push('input.risk_posture must be low|medium|high');
  }

  if (payload.lens_id !== undefined) {
    if (typeof payload.lens_id !== 'string' || !payload.lens_id.trim()) {
      errors.push('lens_id must be a non-empty string when provided');
    } else if (!/^LENS-[A-Z]+-\d{3}$/.test(payload.lens_id.trim())) {
      errors.push('lens_id must match pattern LENS-<DOMAIN>-<NNN> (example: LENS-PM-001)');
    }
  }

  return errors;
}

export function pickRoute(input) {
  const text = [input.objective, input.context, input.desired_outcome, input.constraints].join(' ').toLowerCase();
  let best = ROUTES[0];
  let bestScore = -1;

  for (const route of ROUTES) {
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

export function detectOneWay(input) {
  const text = [input.objective, input.context, input.desired_outcome, input.constraints].join(' ').toLowerCase();
  return OWD_TERMS.some((x) => text.includes(x));
}

export function makeBrief(input, route, oneWay, lensId = null) {
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
    `Lens ID: ${lensId || 'None'}`,
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

export function localRouteResponse(payload, source = 'local_fallback') {
  const input = payload.input || {};
  const lensId = typeof payload.lens_id === 'string' ? payload.lens_id.trim() : null;
  const { route } = pickRoute(input);
  const oneWay = detectOneWay(input);
  const brief = makeBrief(input, route, oneWay, lensId);

  return {
    request_id: payload.request_id || makeRequestId(),
    source,
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
    lens: {
      requested: lensId,
      applied: false,
      mode: 'contract_only',
      note: lensId ? 'Lens accepted at contract layer; routing unchanged.' : 'No lens requested.'
    },
    validation_checks: ['Verify convergence', 'Check reversibility', 'Validate artifact'],
    action_brief_markdown: brief,
    decision_log_payload: `Route=${route.id}; Agent=${route.agent}; OWD=${oneWay}; Lens=${lensId || 'none'}`,
    knowledge_gap: {
      detected: false,
      what_is_missing: [],
      required_retrieval: []
    }
  };
}
