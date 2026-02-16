# Next Steps: Research Phase with Argentavis (Argy)

**Date**: 2026-01-26  
**For**: Adam Neill  
**From**: Mical  
**Status**: READY TO START

---

## What's Happening

You've reviewed the initial mythical games research. Now we need to dig deeper into specific technical questions before we can architect Mythfall properly.

**The tool we'll use**: Argentavis (Argy) - Palette's research agent, running inside Kiro CLI.

---

## Step-by-Step Instructions

### 1. Open Kiro CLI

Open your terminal and navigate to the Mythfall project:

```bash
cd ~/Myth-Fall-Game
kiro-cli chat
```

---

### 2. Load Argentavis (Argy)

Once Kiro is running, type:

```
#argentavis
```

**What happens**: Kiro will transform into Argy, the research agent. You'll see a message like:

```
🔍 Argentavis (Argy) activated - Resource Gatherer mode

Before I search, let me understand what you need:
[5 clarifying questions will appear]
```

---

### 3. Give Argy Your Research Request

**Your research question**:

```
I need to understand how games handle thousands or millions of concurrent players on servers with good graphics. Specifically:

1. What are the proven architectures for massive multiplayer games?
2. What's the difference between "thousands" and "millions" in terms of technical complexity?
3. Are there examples of small teams (under 20 people) who've built games with 1000+ concurrent players?
4. What's the relationship between graphics quality and server capacity?
5. What does "single server" actually mean in modern game architecture?
```

---

### 4. Answer Argy's Clarifying Questions

Argy will ask you 5 questions. Here's how to answer them:

**1. What decision is this research informing?**
```
Architecture decision for Mythfall's multiplayer system - specifically whether we can support thousands of players with good graphics given our team size and budget.
```

**2. What have you already tried or know?**
```
We have research on Vultr/Godot/Socket.io stack showing $0.48/user/month for small-scale multiplayer. We know Hades succeeded with 20 people but wasn't massively multiplayer. We know Genshin Impact has millions of players but required AAA budget.
```

**3. What would "good enough" look like?**
```
Clear understanding of:
- What's technically possible with our constraints (small team, indie budget)
- What "thousands of players" actually requires (architecture, cost, team size)
- Whether we need to adjust our vision or if there's a viable path forward
```

**4. What's the timeline/urgency?**
```
No immediate urgency, but this is blocking our architecture decisions. Need this before we can proceed with Rex (architect agent) to make final technical choices.
```

**5. What will you do with these findings?**
```
Feed this research to Rex (architect agent) who will evaluate options and recommend an architecture that fits our constraints. This will determine our entire technical approach.
```

---

### 5. Review Argy's Research

Argy will search, synthesize findings, and present them in a structured format:

- Key findings
- Patterns observed
- Gaps & uncertainties
- Recommended next steps
- Sources

**Read through everything carefully.**

---

### 6. Confirm or Request More

Argy will ask: **"Is this what you needed? (y/n)"**

- **If yes**: Type `y` - Research is logged and complete
- **If no**: Tell Argy what's missing, and he'll search again

---

### 7. Exit Argy

Once research is complete, Argy will say:

```
✅ Research complete. Logged to decisions.md.
Argentavis session ended. Returning to normal mode.
```

You're now back in normal Kiro mode.

---

### 8. Share Results with Mical

Once you have Argy's research:

1. The findings are automatically logged in `fde/decisions.md`
2. Let Mical know you're done: "Research complete - ready for Rex"
3. We'll review together and move to architecture phase

---

## What Happens Next

**After your research with Argy:**

1. Mical reviews your findings
2. We load Rex (architect agent)
3. Rex uses your research to evaluate architecture options
4. Rex presents 2-4 options with tradeoffs
5. We make informed decisions together

---

## Quick Reference

**Load Argy**: `#argentavis`  
**Exit Argy**: Happens automatically after research is confirmed  
**Check logs**: `cat fde/decisions.md` (see what was logged)  
**Get help**: Ask Mical or type `/help` in Kiro

---

## Important Notes

- **Argy will NOT make decisions** - he only gathers information
- **Answer his questions honestly** - this helps him find exactly what you need
- **If he finds gaps** - that's good! Better to know what we don't know
- **This is iterative** - you can run Argy multiple times if needed

---

**Ready to start? Open Kiro and type `#argentavis`**

---

*This is your first time using Palette's agent system. Argy is designed to make research fast and focused. Trust the process - the clarifying questions might seem tedious, but they ensure you get exactly what you need.*
