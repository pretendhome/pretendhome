import assert from 'node:assert/strict';
import {
  validateRoutePayload,
  localRouteResponse,
  detectOneWay,
  pickRoute
} from './openclaw_adapter_core.mjs';

function run() {
  // Para pass: baseline monitoring checks
  const invalidErrors = validateRoutePayload({ input: { objective: '' } });
  assert.ok(invalidErrors.length > 0, 'Expected validation errors on empty objective');

  const goodPayload = {
    request_id: 'test-1',
    input: {
      objective: 'I need a business plan and grant strategy',
      context: 'small retail store',
      desired_outcome: '30-day plan',
      constraints: 'small budget',
      risk_posture: 'medium'
    }
  };

  // Raptor pass: route matching and one-way detection behavior
  const routeChoice = pickRoute(goodPayload.input);
  assert.equal(routeChoice.route.id, 'RIU-014', 'Expected business-plan route to map to RIU-014');

  assert.equal(
    detectOneWay({
      objective: 'deploy to production deploy now',
      context: '',
      desired_outcome: '',
      constraints: ''
    }),
    true,
    'Expected one-way door to be detected'
  );

  // Anky pass: response contract presence
  const response = localRouteResponse(goodPayload, 'local_fallback');
  assert.equal(response.status, 'ok');
  assert.equal(response.source, 'local_fallback');
  assert.ok(response.routing.selected_rius.length >= 1, 'Expected selected RIUs');
  assert.ok(response.routing.agent_map.length >= 1, 'Expected agent map');
  assert.ok(typeof response.action_brief_markdown === 'string' && response.action_brief_markdown.length > 50);

  const owdResp = localRouteResponse(
    {
      request_id: 'test-2',
      input: {
        objective: 'Delete database and production deploy',
        context: '',
        desired_outcome: 'done',
        constraints: ''
      }
    },
    'local_fallback'
  );
  assert.equal(owdResp.status, 'needs_confirmation', 'Expected one-way status');
  assert.equal(owdResp.one_way_door.detected, true, 'Expected one-way metadata');

  console.log('adapter_contract_check: PASS');
}

run();
