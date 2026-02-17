#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { localRouteResponse } from './openclaw_adapter_core.mjs';

const API_BASE = process.env.MISSIONCANVAS_API_BASE || 'http://localhost:8787';
const RECORD_SECONDS = Number(process.env.MISSIONCANVAS_RECORD_SECONDS || 7);
const TEST_TRANSCRIPT = process.env.MISSIONCANVAS_TEST_TRANSCRIPT || '';
const WHISPER_CMD = process.env.WHISPER_CMD || '';
const ENABLE_TTS = process.env.MISSIONCANVAS_ENABLE_TTS === '1';
const NONINTERACTIVE = process.env.MISSIONCANVAS_NONINTERACTIVE === '1';
const ENV_CONTEXT = process.env.MISSIONCANVAS_CONTEXT || '';
const ENV_OUTCOME = process.env.MISSIONCANVAS_OUTCOME || '';
const ENV_CONSTRAINTS = process.env.MISSIONCANVAS_CONSTRAINTS || '';

function hasCommand(cmd) {
  const which = spawnSync('bash', ['-lc', `command -v ${cmd}`], { encoding: 'utf-8' });
  return which.status === 0;
}

function recordAudio(filePath) {
  if (TEST_TRANSCRIPT) return { ok: true, skipped: true };

  if (process.platform === 'linux' && hasCommand('arecord')) {
    const rec = spawnSync('arecord', ['-f', 'cd', '-d', String(RECORD_SECONDS), '-t', 'wav', filePath], {
      stdio: 'inherit'
    });
    return { ok: rec.status === 0, skipped: false };
  }

  if (process.platform === 'darwin' && hasCommand('sox')) {
    const rec = spawnSync('sox', ['-d', filePath, 'trim', '0', String(RECORD_SECONDS)], {
      stdio: 'inherit'
    });
    return { ok: rec.status === 0, skipped: false };
  }

  return { ok: false, skipped: false, error: 'No supported recorder found (linux: arecord, macOS: sox)' };
}

function transcribeAudio(filePath) {
  if (TEST_TRANSCRIPT) return TEST_TRANSCRIPT;

  if (WHISPER_CMD) {
    const cmd = WHISPER_CMD.replace('{file}', filePath);
    const out = spawnSync('bash', ['-lc', cmd], { encoding: 'utf-8' });
    if (out.status === 0 && out.stdout.trim()) return out.stdout.trim();
  }

  return null;
}

async function promptManualTranscript(rl) {
  return (await rl.question('No transcription tool configured. Type transcript manually: ')).trim();
}

async function routeQuestion(question, rl) {
  const context = NONINTERACTIVE ? ENV_CONTEXT : (await rl.question('Context (optional): ')).trim();
  const desired = NONINTERACTIVE ? ENV_OUTCOME : (await rl.question('Desired outcome (optional): ')).trim();
  const constraints = NONINTERACTIVE ? ENV_CONSTRAINTS : (await rl.question('Constraints (optional): ')).trim();

  const payload = {
    request_id: `tvb-${Date.now()}`,
    timestamp: new Date().toISOString(),
    session_id: 'terminal-voice-session',
    user: { id: 'terminal-user', role: 'operator' },
    input: {
      objective: question,
      context,
      desired_outcome: desired,
      constraints,
      risk_posture: 'medium'
    },
    policy: {
      enforce_convergence: true,
      enforce_one_way_gate: true,
      max_selected_rius: 5,
      require_validation_checks: true
    },
    runtime: {
      mode: 'planning',
      allow_execution: false,
      tool_whitelist: ['research', 'planning'],
      log_target: 'implementation'
    }
  };

  let data;
  try {
    const res = await fetch(`${API_BASE}/v1/missioncanvas/route`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    data = await res.json();
    if (!res.ok) {
      console.error('Route error:', data);
      return;
    }
  } catch (_err) {
    data = localRouteResponse(payload, 'terminal_local_fallback');
  }

  console.log('\n=== MissionCanvas Response ===');
  console.log('Source:', data.source || 'unknown');
  console.log('Status:', data.status || 'unknown');
  const selected = data?.routing?.selected_rius?.[0];
  const agent = data?.routing?.agent_map?.[0];
  if (selected) console.log('RIU:', `${selected.riu_id} - ${selected.name}`);
  if (agent) console.log('Agent:', agent.agent);
  if (data?.one_way_door?.detected) {
    console.log('ONE-WAY DOOR: detected (confirmation required)');
  }

  const brief = data.action_brief_markdown || '';
  console.log('\n--- Action Brief ---\n');
  console.log(brief || '(none)');

  if (ENABLE_TTS && brief) {
    if (process.platform === 'darwin' && hasCommand('say')) {
      spawnSync('say', [brief.slice(0, 900)], { stdio: 'inherit' });
    } else if (hasCommand('espeak')) {
      spawnSync('espeak', [brief.slice(0, 900)], { stdio: 'inherit' });
    }
  }
}

async function main() {
  const rl = readline.createInterface({ input, output });
  console.log('MissionCanvas Terminal Voice Bridge');
  console.log(`API base: ${API_BASE}`);
  console.log('Type "exit" at any question prompt to quit.\n');

  while (true) {
    const wav = path.join(os.tmpdir(), `mc_voice_${Date.now()}.wav`);
    const rec = recordAudio(wav);

    let transcript = null;
    if (rec.ok) {
      transcript = transcribeAudio(wav);
    } else if (rec.error) {
      console.log(rec.error);
    }

    if (!transcript) {
      transcript = await promptManualTranscript(rl);
    }

    if (!transcript || transcript.toLowerCase() === 'exit') break;

    await routeQuestion(transcript, rl);

    try {
      if (fs.existsSync(wav)) fs.unlinkSync(wav);
    } catch (_err) {
      // ignore cleanup issues
    }

    if (NONINTERACTIVE) break;
    const again = (await rl.question('\nRun another voice cycle? (y/n): ')).trim().toLowerCase();
    if (again !== 'y') break;
  }

  rl.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
