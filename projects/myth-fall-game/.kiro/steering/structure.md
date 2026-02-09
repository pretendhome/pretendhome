# Project Structure

## Monorepo Layout

```
/
├── client/          # Godot game project
├── server/          # Node.js Socket.io backend
├── shared/          # Common protocols and types
├── deployment/      # Docker, Nginx configs, CI/CD
└── package.json     # Root package with convenience scripts
```

## Client Structure (`/client`)

```
client/
├── project.godot           # Godot project file
├── export_presets.cfg      # HTML5 export configuration
├── scenes/
│   ├── main.tscn          # Main game scene
│   ├── player.tscn        # Player character
│   └── ui/                # UI components
├── scripts/
│   ├── network_client.gd  # WebSocket client
│   ├── player.gd          # Player controller
│   ├── game_state.gd      # Client-side state
│   └── protocol.gd        # Shared protocol (Godot)
└── assets/
    ├── sprites/           # Character and world sprites
    ├── audio/             # Sound effects and music
    └── fonts/             # UI fonts
```

## Server Structure (`/server`)

```
server/
├── src/
│   ├── index.ts           # Entry point, Express + Socket.io setup
│   ├── game-server.ts     # Authoritative game loop (20Hz)
│   ├── room-manager.ts    # Room creation and matchmaking
│   ├── protocol.ts        # Shared protocol types (TypeScript)
│   ├── database/
│   │   ├── schema.sql     # PostgreSQL schema
│   │   ├── player-store.ts
│   │   └── session-store.ts
│   └── utils/
│       ├── validation.ts  # Input validation
│       └── auth.ts        # JWT authentication
├── package.json
├── tsconfig.json
└── Dockerfile             # Multi-stage build
```

## Shared Structure (`/shared`)

```
shared/
├── protocol.md            # Protocol documentation
└── types/
    └── game-protocol.ts   # Shared TypeScript types
```

## Deployment Structure (`/deployment`)

```
deployment/
├── docker/
│   ├── docker-compose.yml      # Local dev stack
│   └── docker-compose.prod.yml # Production stack
├── nginx/
│   └── nginx.conf              # WebSocket proxy config
├── monitoring/
│   ├── prometheus.yml
│   └── grafana-dashboards/
└── github-actions/
    └── deploy.yml              # CI/CD workflow
```

## Architecture Patterns

### Protocol Sharing

- Protocol defined in `/shared/types/game-protocol.ts` (TypeScript)
- Godot client implements equivalent in `/client/scripts/protocol.gd`
- Keep both in sync when modifying protocol
- Documentation in `/shared/protocol.md`

### Authoritative Server Pattern

- Server maintains complete game state authority
- Clients send input commands only (movement, actions)
- Server validates all inputs server-side
- Server broadcasts state snapshots at 50ms intervals
- Clients use prediction/reconciliation for responsiveness

### Room-Based Architecture

- Each game room supports up to 50 concurrent players
- Room manager handles matchmaking and room creation
- Rooms are isolated game instances with independent state
- Cross-room communication via Redis pub/sub

### Client-Server Communication

**Client → Server**:
- `ClientHello` - Initial connection with auth token
- `ClientInput` - Player input (movement, actions)
- `ClientReady` - Ready state for match start

**Server → Client**:
- `ServerHello` - Welcome message with player ID
- `Snapshot` - Game state update (players, NPCs, items)
- `ServerEvent` - Game events (player joined, item collected)
- `ServerOver` - Match end with results

### State Management

- **Server**: Authoritative source of truth
  - Player positions, health, inventory
  - NPC states, item spawns
  - Combat resolution, damage calculation
  
- **Client**: Predictive rendering
  - Local player prediction
  - Entity interpolation
  - Rollback on server correction

### Database Schema

- **players** - User accounts, authentication
- **player_stats** - Experience, levels, progression
- **player_items** - Inventory and equipment
- **game_sessions** - Active and historical matches
- **leaderboards** - Competitive rankings

## Conventions

- **TypeScript**: Strict mode enabled
- **Godot**: GDScript with static typing where possible
- **Naming**: snake_case for Godot, camelCase for TypeScript
- **Network**: 20Hz server tick, 50ms state broadcast
- **IDs**: UUIDs for players, rooms, and sessions
- **Validation**: All inputs validated server-side
- **Security**: JWT tokens, HTTP-only cookies, rate limiting
