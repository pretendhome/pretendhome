# Sixty-Second Showdown

Small-room realtime web game (2–8 players), 60-second rounds, top-down arcade with "fruits & wizardry" theme.

## Stack
- **Client**: TypeScript + Phaser 3 + Vite
- **Backend**: Cloudflare Workers + Durable Objects (one DO = one match room)
- **Hosting**: Cloudflare Pages (static client) + Workers/DO (backend)
- **Storage**: Cloudflare D1 (SQLite) for profiles & leaderboards (later)

## Network Model
- 30 Hz fixed-step server
- Client sends input ticks at ~30 Hz
- Server authoritative; snapshots @ ~10 Hz
- Client prediction + reconciliation

## MVP Scope
- Join quick-match lobby → enter a room (max 8)
- Top-down movement (WASD), dash on Space (0.3s cooldown)
- Auto-spawn coin orbs; collect = +1 score
- Shrinking zone after 30s (radius tween to 0 by 60s). Outside zone = slow
- Round ends at 60s → show scores → auto-rematch in 5s

## Setup & Run

### Client
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173

### Worker
```bash
cd worker
npm install -g wrangler
npm install
wrangler dev
```

### Environment
Set `VITE_WS_URL=ws://127.0.0.1:8787/ws` in `/client/.env` or hardcode in `main.ts` for dev.

## Testing MVP
1. Open two browser tabs at http://localhost:5173
2. Both should join the same room
3. Move with WASD, dash with Space
4. Collect coins (score increments)
5. Zone shrinks after 30s
6. Round ends at 60s, shows results, rematch in 5s

## Deploy (later)
```bash
# Create D1 database
wrangler d1 create showdown-db
# Update wrangler.toml with real database_id

# Deploy worker
cd worker
wrangler deploy

# Build & deploy client to Cloudflare Pages
cd ../client
npm run build
# Upload dist/ to Cloudflare Pages
# Set VITE_WS_URL to your Worker's /ws URL at build time
```

## Next Steps
- Phase 1: Feel & Polish (acceleration/friction, dash FX, particles)
- Phase 2: Breakable Cover (crates with coins inside)
- Phase 3: Boomerang Wand Pickup
- Phase 4: UI & Flows (title → match → results scenes)
- Phase 5: Leaderboards (D1)
- Phase 6: Cosmetics (player hues, trails)
