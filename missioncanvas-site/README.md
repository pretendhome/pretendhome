# MissionCanvas Site (OpenClaw Integration v1.2)

This folder contains a full web + adapter integration prototype for Palette-aligned OpenClaw routing.

## Included

- `index.html` - modern landing + ask flow + voice controls
- `for-business-owners.html` - business-owner landing page
- `styles.css` - shared styles
- `config.js` - frontend runtime config (set API base URL)
- `app.js` - frontend routing logic + confirmation flow + voice UX
- `server.mjs` - API adapter + OpenClaw proxy + fallback
- `openclaw_adapter_core.mjs` - shared route/validation core
- `adapter_contract_check.mjs` - deterministic contract checks
- `terminal_voice_bridge.mjs` - direct terminal microphone bridge
- `OPENCLAW_ITERATION_LOG.md` - Para/Raptor/Anky iteration records
- `OPENCLAW_RESEARCH_NOTES.md` - external research references and design rationale
- `deploy/PRODUCTION_WIRING.md` - live wiring runbook
- `scripts/run_rossi_pilot.mjs` - production pilot runner
- `pilot/rossi_payload.json` - pilot payload

## Quick Start

```bash
cd missioncanvas-site
node server.mjs
```

Open:
- `http://localhost:8787`

Set frontend API base in `config.js` when deploying:

```js
window.MISSIONCANVAS_CONFIG = { apiBase: "https://api.missioncanvas.ai" };
```

## OpenClaw Proxy Modes

Set `OPENCLAW_BASE_URL` to your gateway/runtime and choose one mode:

- `missioncanvas` (default): proxy to `/v1/missioncanvas/route`
- `responses`: proxy to `/v1/responses`
- `chatcompletions`: proxy to `/v1/chat/completions`

### Example

```bash
cd missioncanvas-site
OPENCLAW_BASE_URL="https://<your-openclaw-host>" \
OPENCLAW_API_KEY="<token-if-needed>" \
OPENCLAW_UPSTREAM_MODE="responses" \
OPENCLAW_AGENT_ID="main" \
node server.mjs
```

If upstream fails or is unavailable, adapter automatically falls back to local Palette route logic.

## Adapter API Endpoints

- `GET /v1/missioncanvas/health`
- `GET /v1/missioncanvas/capabilities`
- `POST /v1/missioncanvas/route`
- `POST /v1/missioncanvas/talk-stream` (NDJSON streaming)
- `POST /v1/missioncanvas/confirm-one-way-door`
- `POST /v1/missioncanvas/log-append`

Contract reference:
- `palette/docs/openclaw_application_prompt_missioncanvas_api_contract_v1.0.md`

### Optional Lens Selector (Contract-Only v1)

`POST /v1/missioncanvas/route` accepts optional top-level `lens_id`:

```json
{
  "lens_id": "LENS-PM-001",
  "input": {
    "objective": "Decide product launch scope",
    "desired_outcome": "Go/no-go decision",
    "context": "2-week deadline",
    "constraints": "small team"
  }
}
```

Current behavior:
- Validates format: `LENS-<DOMAIN>-<NNN>` (example: `LENS-ENG-001`)
- Echoes lens metadata in response (`response.lens`)
- Includes lens in action brief and decision-log payload
- Does **not** change routing logic yet (safe, reversible contract layer only)

## Voice Experience

### Web voice

- Input: `SpeechRecognition` / `webkitSpeechRecognition`
- Output: `speechSynthesis`
- Best support: Chrome / Edge

### Terminal microphone bridge

Run:

```bash
cd missioncanvas-site
node terminal_voice_bridge.mjs
```

Environment options:

- `MISSIONCANVAS_API_BASE` (default `http://localhost:8787`)
- `MISSIONCANVAS_RECORD_SECONDS` (default `7`)
- `WHISPER_CMD` (optional transcription command, use `{file}` placeholder)
- `MISSIONCANVAS_ENABLE_TTS=1` (optional local TTS)
- `MISSIONCANVAS_TEST_TRANSCRIPT` (for non-mic testing)

Adapter env options:

- `MISSIONCANVAS_DECISIONS_LOG_PATH` (optional absolute/relative file path for decision append)

Example (non-mic test):

```bash
MISSIONCANVAS_TEST_TRANSCRIPT="I need a business plan for my store" node terminal_voice_bridge.mjs
```

## Validation (Para -> Raptor -> Anky)

Run deterministic adapter checks:

```bash
cd missioncanvas-site
node adapter_contract_check.mjs
```

Expected output:

```text
adapter_contract_check: PASS
```

Pilot flow test:

```bash
cd missioncanvas-site
node scripts/run_rossi_pilot.mjs --offline
```

## Streaming Talk Mode

- In web UI, use `Run Streaming Response` for incremental output.
- Adapter endpoint returns line-wise NDJSON chunks and final structured response.

## Notes

- GitHub Pages can host static frontend files but cannot run `server.mjs`.
- For hosted dynamic mode, deploy adapter API (`server.mjs`) to a serverless/container runtime and set `window.MISSIONCANVAS_CONFIG.apiBase` in the frontend.
