(function () {
  const CONFIG = {
    apiBase: (window.MISSIONCANVAS_CONFIG && window.MISSIONCANVAS_CONFIG.apiBase) || "",
    routePath: "/v1/missioncanvas/route",
    streamPath: "/v1/missioncanvas/talk-stream",
    confirmPath: "/v1/missioncanvas/confirm-one-way-door",
    logAppendPath: "/v1/missioncanvas/log-append"
  };

  const STATE = {
    transcript: "",
    structured: {
      objective: "",
      context: "",
      desired_outcome: "",
      constraints: ""
    },
    lastResponse: null,
    lastRequestId: null,
    lastOneWayItems: [],
    lastBrief: "",
    lastDecisionLogPayload: ""
  };

  const $ = (id) => document.getElementById(id);

  const refs = {
    systemStatus: $("systemStatus"),
    btnVoiceStart: $("btnVoiceStart"),
    btnVoiceStop: $("btnVoiceStop"),
    voiceState: $("voiceState"),
    transcriptInput: $("transcriptInput"),
    btnTranslate: $("btnTranslate"),
    translateConfidence: $("translateConfidence"),
    tObjective: $("tObjective"),
    tContext: $("tContext"),
    tOutcome: $("tOutcome"),
    tConstraints: $("tConstraints"),
    btnRoute: $("btnRoute"),
    btnStream: $("btnStream"),
    manualInput: $("manualInput"),
    btnManualTranslate: $("btnManualTranslate"),
    resultStatus: $("resultStatus"),
    rSource: $("rSource"),
    rStatus: $("rStatus"),
    rRiu: $("rRiu"),
    rAgent: $("rAgent"),
    rArtifact: $("rArtifact"),
    rAction: $("rAction"),
    briefOutput: $("briefOutput"),
    btnSpeak: $("btnSpeak"),
    btnCopy: $("btnCopy"),
    btnConfirmOwd: $("btnConfirmOwd"),
    btnAppendLog: $("btnAppendLog"),
    autoLog: $("autoLog"),
    followupInput: $("followupInput"),
    btnRefine: $("btnRefine"),
    presetChips: Array.from(document.querySelectorAll(".preset-chip")),
    streamBox: $("streamBox"),
    streamOutput: $("streamOutput")
  };

  function setSystemStatus(message, level = "warn") {
    if (!refs.systemStatus) return;
    refs.systemStatus.textContent = `System status: ${message}`;
    refs.systemStatus.classList.remove("ok", "warn", "error");
    refs.systemStatus.classList.add(level);
  }

  function splitSentences(text) {
    return String(text || "")
      .split(/(?<=[.!?])\s+|\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function firstNonEmpty(arr) {
    for (const item of arr) {
      if (item && String(item).trim()) return String(item).trim();
    }
    return "";
  }

  function findSentence(sentences, patterns) {
    for (const s of sentences) {
      const lower = s.toLowerCase();
      if (patterns.some((p) => lower.includes(p))) return s;
    }
    return "";
  }

  function mergeUnique(parts) {
    return [...new Set(parts.filter(Boolean).map((x) => x.trim()))].join(" ");
  }

  // Translation layer: convert natural speech into structured mission prompt.
  function translateNaturalInput(rawText, prior = null) {
    const text = String(rawText || "").trim();
    const sentences = splitSentences(text);

    const objective = firstNonEmpty([
      findSentence(sentences, ["i need", "i want", "help me", "build", "create", "plan", "figure out"]),
      sentences[0],
      prior?.objective
    ]);

    const context = firstNonEmpty([
      findSentence(sentences, ["currently", "today", "right now", "already", "we have", "so far", "existing"]),
      prior?.context
    ]);

    const desiredOutcome = firstNonEmpty([
      findSentence(sentences, ["so that", "goal", "outcome", "by", "within", "end state", "in "]),
      prior?.desired_outcome
    ]);

    const constraints = mergeUnique([
      findSentence(sentences, ["budget", "deadline", "time", "limited", "cannot", "can't", "risk", "team", "constraint"]),
      prior?.constraints
    ]);

    let confidence = 40;
    if (objective) confidence += 25;
    if (context) confidence += 10;
    if (desiredOutcome) confidence += 15;
    if (constraints) confidence += 10;

    return {
      objective,
      context,
      desired_outcome: desiredOutcome,
      constraints,
      confidence: Math.min(100, confidence)
    };
  }

  function renderStructuredPrompt(data) {
    refs.tObjective.value = data.objective || "";
    refs.tContext.value = data.context || "";
    refs.tOutcome.value = data.desired_outcome || "";
    refs.tConstraints.value = data.constraints || "";
    refs.translateConfidence.textContent = `Confidence: ${data.confidence || 0}%`;

    STATE.structured = {
      objective: data.objective || "",
      context: data.context || "",
      desired_outcome: data.desired_outcome || "",
      constraints: data.constraints || ""
    };
  }

  function readStructuredPrompt() {
    return {
      objective: String(refs.tObjective.value || "").trim(),
      context: String(refs.tContext.value || "").trim(),
      desired_outcome: String(refs.tOutcome.value || "").trim(),
      constraints: String(refs.tConstraints.value || "").trim()
    };
  }

  function localFallbackRoute(structured) {
    const objective = structured.objective || "UNKNOWN";
    const requestId = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    const route = /grant|fund/i.test(objective)
      ? { id: "RIU-039", name: "Funding & Grants", agent: "Argy + Theri", artifact: "Funding Pipeline" }
      : /plan|business|strategy/i.test(objective)
        ? { id: "RIU-014", name: "Business Planning & Positioning", agent: "Rex + Yuty", artifact: "Operating Plan v1" }
        : { id: "RIU-001", name: "Convergence & Scope Clarification", agent: "Yuty -> Rex", artifact: "Convergence Brief" };

    const brief = [
      "# MissionCanvas Action Brief",
      "",
      `Route: ${route.id} - ${route.name}`,
      `Primary Agent: ${route.agent}`,
      "",
      "## Input",
      `Objective: ${structured.objective || "N/A"}`,
      `Context: ${structured.context || "N/A"}`,
      `Desired Outcome: ${structured.desired_outcome || "N/A"}`,
      `Constraints: ${structured.constraints || "N/A"}`,
      "",
      "## Immediate Action",
      `Build ${route.artifact} and execute first 30-day priority set.`
    ].join("\n");

    return {
      request_id: requestId,
      source: "local_fallback",
      status: "ok",
      routing: {
        selected_rius: [{ riu_id: route.id, name: route.name, why_now: "Fallback route chosen by local translator." }],
        agent_map: [{ agent: route.agent, task: `Build ${route.artifact} and define first execution sequence.` }]
      },
      artifacts: { to_create: [route.artifact] },
      action_brief_markdown: brief,
      decision_log_payload: `Route=${route.id}; Agent=${route.agent}; OWD=false`,
      one_way_door: { detected: false, items: [] }
    };
  }

  async function fetchRoute(structured) {
    const endpoint = `${CONFIG.apiBase}${CONFIG.routePath}`;
    const body = {
      request_id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      timestamp: new Date().toISOString(),
      session_id: "missioncanvas-web-session",
      user: { id: "web-user", role: "operator" },
      input: {
        objective: structured.objective,
        context: structured.context,
        desired_outcome: structured.desired_outcome,
        constraints: structured.constraints,
        risk_posture: "medium"
      },
      policy: {
        enforce_convergence: true,
        enforce_one_way_gate: true,
        max_selected_rius: 5,
        require_validation_checks: true
      },
      runtime: {
        mode: "planning",
        allow_execution: false,
        tool_whitelist: ["research", "planning"],
        log_target: "implementation"
      }
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setSystemStatus("proxy route success", "ok");
      return data;
    } catch (_err) {
      setSystemStatus("proxy unavailable, using local fallback", "warn");
      return localFallbackRoute(structured);
    }
  }

  async function fetchStream(structured) {
    refs.streamBox.classList.remove("hidden");
    refs.streamOutput.textContent = "";

    const endpoint = `${CONFIG.apiBase}${CONFIG.streamPath}`;
    const body = {
      request_id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      timestamp: new Date().toISOString(),
      session_id: "missioncanvas-web-session",
      user: { id: "web-user", role: "operator" },
      input: {
        objective: structured.objective,
        context: structured.context,
        desired_outcome: structured.desired_outcome,
        constraints: structured.constraints,
        risk_posture: "medium"
      },
      policy: {
        enforce_convergence: true,
        enforce_one_way_gate: true,
        max_selected_rius: 5,
        require_validation_checks: true
      },
      runtime: {
        mode: "planning",
        allow_execution: false,
        tool_whitelist: ["research", "planning"],
        log_target: "implementation"
      }
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!res.ok || !res.body) throw new Error("Stream unavailable");
      setSystemStatus("stream connected", "ok");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalResponse = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          let evt;
          try {
            evt = JSON.parse(line);
          } catch (_err) {
            continue;
          }

          if (evt.type === "chunk") {
            refs.streamOutput.textContent += evt.text;
          } else if (evt.type === "final") {
            finalResponse = evt.response;
          }
        }
      }

      if (finalResponse) renderResponse(finalResponse);
    } catch (_err) {
      setSystemStatus("stream unavailable", "warn");
      refs.streamOutput.textContent = "Streaming unavailable. Use standard route.";
    }
  }

  function renderResponse(response) {
    const selected = response?.routing?.selected_rius?.[0] || null;
    const agentMap = response?.routing?.agent_map?.[0] || null;
    const artifact = response?.artifacts?.to_create?.[0] || "-";

    refs.resultStatus.textContent = "Route complete.";
    refs.rSource.textContent = response?.source || "unknown";
    refs.rStatus.textContent = response?.status || "unknown";
    refs.rRiu.textContent = selected ? `${selected.riu_id} - ${selected.name}` : "-";
    refs.rAgent.textContent = agentMap?.agent || "-";
    refs.rArtifact.textContent = artifact;
    refs.rAction.textContent = agentMap?.task || "-";
    refs.briefOutput.value = response?.action_brief_markdown || "No brief returned.";

    STATE.lastResponse = response;
    STATE.lastRequestId = response?.request_id || null;
    STATE.lastOneWayItems = response?.one_way_door?.items || [];
    STATE.lastBrief = response?.action_brief_markdown || "";
    STATE.lastDecisionLogPayload = response?.decision_log_payload || "";

    if (response?.status === "needs_confirmation" && STATE.lastOneWayItems.length) {
      refs.btnConfirmOwd.classList.remove("hidden");
    } else {
      refs.btnConfirmOwd.classList.add("hidden");
    }
  }

  async function appendDecisionLog() {
    if (!STATE.lastRequestId || !STATE.lastDecisionLogPayload) {
      refs.rAction.textContent = "No decision payload to append yet.";
      return;
    }

    const endpoint = `${CONFIG.apiBase}${CONFIG.logAppendPath}`;
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          request_id: STATE.lastRequestId,
          decision_log_payload: STATE.lastDecisionLogPayload,
          action_brief_markdown: STATE.lastBrief
        })
      });
      const data = await res.json();
      refs.rAction.textContent = data?.message || "Decision log appended.";
    } catch (_err) {
      refs.rAction.textContent = "Decision log append failed.";
    }
  }

  async function confirmOneWayDoor() {
    if (!STATE.lastRequestId || !STATE.lastOneWayItems.length) return;

    const endpoint = `${CONFIG.apiBase}${CONFIG.confirmPath}`;
    const payload = {
      request_id: STATE.lastRequestId,
      confirmation_id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      approvals: STATE.lastOneWayItems.map((item) => ({
        decision_id: item.decision_id,
        approved: true,
        approved_by: "web-user",
        timestamp: new Date().toISOString(),
        notes: "Confirmed via MissionCanvas voice-first UI"
      }))
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      refs.rStatus.textContent = `${data.status || "approved"} (confirmed)`;
      refs.btnConfirmOwd.classList.add("hidden");
    } catch (_err) {
      refs.rStatus.textContent = "confirmation_failed";
    }
  }

  function speakBrief() {
    if (!STATE.lastBrief || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(STATE.lastBrief.slice(0, 1200));
    utter.rate = 1.0;
    utter.pitch = 1.0;
    window.speechSynthesis.speak(utter);
  }

  async function copyBrief() {
    if (!STATE.lastBrief) return;
    try {
      await navigator.clipboard.writeText(STATE.lastBrief);
      refs.btnCopy.textContent = "Copied";
      setTimeout(() => {
        refs.btnCopy.textContent = "Copy Brief";
      }, 1000);
    } catch (_err) {
      refs.btnCopy.textContent = "Copy Failed";
    }
  }

  function initVoiceRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      refs.voiceState.textContent = "Voice unsupported in this browser";
      refs.btnVoiceStart.disabled = true;
      refs.btnVoiceStop.disabled = true;
      setSystemStatus("voice unsupported in this browser", "warn");
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    let finalText = "";

    recognition.onstart = function () {
      refs.voiceState.textContent = "Listening...";
      setSystemStatus("voice listening", "ok");
    };

    recognition.onresult = function (event) {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalText += `${t} `;
        else interim += t;
      }
      refs.transcriptInput.value = `${finalText}${interim}`.trim();
      STATE.transcript = refs.transcriptInput.value;
    };

    recognition.onerror = function () {
      refs.voiceState.textContent = "Voice error";
      setSystemStatus("voice capture error", "error");
    };

    recognition.onend = function () {
      refs.voiceState.textContent = "Voice idle";
      setSystemStatus("voice capture complete", "ok");
      const translated = translateNaturalInput(refs.transcriptInput.value, STATE.structured);
      renderStructuredPrompt(translated);
    };

    refs.btnVoiceStart.addEventListener("click", function () {
      try {
        finalText = refs.transcriptInput.value ? `${refs.transcriptInput.value} ` : "";
        recognition.start();
      } catch (_err) {
        refs.voiceState.textContent = "Voice unavailable";
        setSystemStatus("microphone unavailable", "error");
      }
    });

    refs.btnVoiceStop.addEventListener("click", function () {
      recognition.stop();
      refs.voiceState.textContent = "Stopping...";
    });
  }

  function initEvents() {
    refs.presetChips.forEach((chip) => {
      chip.addEventListener("click", function () {
        const text = chip.getAttribute("data-preset") || "";
        refs.transcriptInput.value = text;
        const translated = translateNaturalInput(text, STATE.structured);
        renderStructuredPrompt(translated);
        setSystemStatus("preset loaded", "ok");
      });
    });

    refs.btnTranslate.addEventListener("click", function () {
      const translated = translateNaturalInput(refs.transcriptInput.value, STATE.structured);
      renderStructuredPrompt(translated);
      setSystemStatus("translation generated", "ok");
    });

    refs.btnManualTranslate.addEventListener("click", function () {
      refs.transcriptInput.value = String(refs.manualInput.value || "").trim();
      const translated = translateNaturalInput(refs.transcriptInput.value, STATE.structured);
      renderStructuredPrompt(translated);
      setSystemStatus("manual text translated", "ok");
    });

    refs.btnRoute.addEventListener("click", async function () {
      const structured = readStructuredPrompt();
      if (!structured.objective) {
        refs.resultStatus.textContent = "Add objective first (voice or text).";
        setSystemStatus("missing objective", "warn");
        return;
      }
      const response = await fetchRoute(structured);
      renderResponse(response);
      if (refs.autoLog.checked) await appendDecisionLog();
    });

    refs.btnStream.addEventListener("click", async function () {
      const structured = readStructuredPrompt();
      if (!structured.objective) return;
      await fetchStream(structured);
    });

    refs.btnRefine.addEventListener("click", async function () {
      const followup = String(refs.followupInput.value || "").trim();
      if (!followup) return;
      const combined = `${refs.transcriptInput.value || ""}\n${followup}`.trim();
      refs.transcriptInput.value = combined;
      const translated = translateNaturalInput(combined, readStructuredPrompt());
      renderStructuredPrompt(translated);
      const response = await fetchRoute(readStructuredPrompt());
      renderResponse(response);
      setSystemStatus("self-refinement reroute complete", "ok");
    });

    refs.btnSpeak.addEventListener("click", speakBrief);
    refs.btnCopy.addEventListener("click", copyBrief);
    refs.btnAppendLog.addEventListener("click", appendDecisionLog);
    refs.btnConfirmOwd.addEventListener("click", confirmOneWayDoor);
  }

  initVoiceRecognition();
  initEvents();
  setSystemStatus("ready", "ok");
})();
