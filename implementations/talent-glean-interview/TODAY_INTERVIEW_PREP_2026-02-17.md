# Interview Prep — MissionCanvas x OpenClaw Integration (Feb 17, 2026)

## 1) What We Worked On
- Integrated `missioncanvas-site` with OpenClaw as upstream runtime for routing and action-brief generation.
- Validated MissionCanvas adapter health, payload contract, and fallback behavior.
- Configured Hostinger VPS + Docker OpenClaw deployment, gateway auth, endpoint toggles, and firewall rules.
- Diagnosed network and binding issues between local laptop, VPS host, and OpenClaw container.

## 2) System Objective
- Enable users to interact with MissionCanvas web UI and route requests through OpenClaw (instead of local fallback), supporting a production-ready voice/chat workflow.

## 3) What Is Working
- MissionCanvas local adapter service is healthy on `http://localhost:8787`.
- Adapter payload contract is confirmed (`input` object is required).
- OpenClaw gateway endpoint toggles for `chatCompletions` and `responses` are enabled in config.
- Docker port mappings now include both:
  - `60233:60233` (Hostinger/OpenClaw control UI)
  - `18789:18789` (gateway runtime port)
- VPS firewall rules are now explicitly configured for:
  - `TCP 22` (SSH)
  - `TCP 60233` (control UI)
  - `TCP 18789` (gateway API)

## 4) Key Technical Findings
- Hitting `:60233` directly returned HTML UI, not API JSON.
- OpenClaw API calls succeeded from inside container to `127.0.0.1:18789`.
- External/local calls to `72.60.171.27:18789` repeatedly timed out.
- Logs showed OpenClaw still listening on loopback (`ws://127.0.0.1:18789`), causing proxy fallback.
- Current MissionCanvas route output still shows `"source": "local_fallback"`.

## 5) Main Blocker (Current)
- OpenClaw gateway binding/routing mode is not yet exposing a reachable API path for external MissionCanvas proxy calls, despite endpoint toggles and firewall updates.

## 6) Security Notes
- Multiple secrets/tokens were exposed during debugging.
- Immediate action required after session:
  - Rotate OpenClaw gateway token.
  - Rotate Hostinger API token.
  - Rotate any exposed third-party API keys.
  - Update `.env.production` with new values.

## 7) What This Demonstrates (Interview Framing)
- Strong systems debugging under ambiguity across UI, API, container, and network layers.
- Methodical diagnosis process:
  1. Confirm app health
  2. Confirm payload contract
  3. Confirm upstream endpoint behavior
  4. Confirm container logs
  5. Confirm firewall activation + synchronization
  6. Isolate loopback-vs-public bind issues
- Practical execution in real infra, not just local prototypes.

## 8) Suggested Interview Narrative (30–45 sec)
"Today I led end-to-end integration of a multi-agent web runtime with OpenClaw on a live VPS. We got the adapter and policy routing stable, validated contract behavior, and then traced a production connectivity issue across gateway config, Docker ports, and host firewall synchronization. The main challenge was that the runtime stayed loopback-bound even after endpoint toggles, which kept the app in fallback mode. The key outcome is a near-complete production path with a clearly isolated final binding issue and a reproducible runbook to close it."

## 9) Immediate Next Steps
1. Finalize OpenClaw gateway bind mode/address so API is externally reachable from MissionCanvas.
2. Re-test direct OpenClaw `chat/completions` from local machine.
3. Re-test MissionCanvas route and verify source changes from `local_fallback` to OpenClaw upstream.
4. Run one pilot flow (business-plan prompt) and capture artifacts/log evidence.
5. Rotate all exposed secrets and verify clean credentials.

## 10) Useful Commands (Quick Reference)
```bash
# MissionCanvas health
curl -sS http://localhost:8787/v1/missioncanvas/health

# MissionCanvas route (correct payload shape)
curl -sS -X POST http://localhost:8787/v1/missioncanvas/route \
  -H "Content-Type: application/json" \
  -d '{"input":{"objective":"i need a business plan"}}'

# OpenClaw direct test (local env-loaded terminal)
curl --max-time 20 -i -sS -X POST "${OPENCLAW_BASE_URL%/}/v1/chat/completions" \
  -H "Authorization: Bearer $OPENCLAW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"openclaw:main","messages":[{"role":"user","content":"say hello"}]}'
```
