# MissionCanvas Site (OpenClaw Integration v1)

This folder now includes an end-to-end web interface prototype with:

- Modern landing page (`index.html`)
- Palette question router UI (RIU + agent + artifact + action brief)
- Voice input + speak-brief output (browser Web Speech APIs)
- Business-owner page (`for-business-owners.html`)
- Lightweight API adapter server (`server.mjs`)
- Shared adapter core logic (`openclaw_adapter_core.mjs`)
- Contract validator (`adapter_contract_check.mjs`)

Files:

- `index.html`
- `for-business-owners.html`
- `styles.css`
- `app.js`
- `server.mjs`
- `CNAME`

## Local run (recommended)

Use Node 18+.

```bash
cd missioncanvas-site
node server.mjs
```

Open: `http://localhost:8787`

## OpenClaw mode (proxy)

If you have an OpenClaw deployment endpoint, run:

```bash
cd missioncanvas-site
OPENCLAW_BASE_URL="https://<your-openclaw-host>" OPENCLAW_API_KEY="<optional-key>" node server.mjs
```

Behavior:

- Server attempts upstream OpenClaw call at `/v1/missioncanvas/route`
- On failure/unavailable upstream, it falls back to local Palette route logic

## API endpoints exposed by `server.mjs`

- `POST /v1/missioncanvas/route`
- `POST /v1/missioncanvas/confirm-one-way-door`
- `GET /v1/missioncanvas/health`
- `GET /v1/missioncanvas/capabilities`

These follow the contract documented in:

- `palette/docs/openclaw_application_prompt_missioncanvas_api_contract_v1.0.md`

## Voice experience notes

- Voice input uses `SpeechRecognition`/`webkitSpeechRecognition`
- Brief narration uses `speechSynthesis`
- Browser support varies (best in Chrome/Edge)
- For direct terminal voice capture, use browser mode today; terminal microphone bridge is planned as a next-phase adapter.

## Validation pass (Para -> Raptor -> Anky)

Run contract checks without starting network listeners:

```bash
cd missioncanvas-site
node adapter_contract_check.mjs
```

Expected output:

```text
adapter_contract_check: PASS
```

## GitHub Pages note

GitHub Pages cannot run `server.mjs`.

For hosted dynamic mode, deploy the adapter API to a serverless/container runtime and set:

- `window.MISSIONCANVAS_CONFIG.apiBase`

in your deployed frontend environment.
