# Tech Stack

## Game Engine (Client)

- **Engine**: Godot 4.3+ (MIT license, zero royalties)
- **Export Target**: HTML5/WebAssembly (WebGL 2.0)
- **Language**: GDScript / C# (Godot native)
- **Asset Optimization**: Brotli compression, WebP textures, <10MB initial load

## Backend (Server)

- **Runtime**: Node.js (LTS)
- **Networking**: Socket.io 4.7.5+ (WebSocket with fallbacks)
- **Database**: PostgreSQL 18 (asynchronous I/O, OAuth support)
- **Session Management**: Redis (cross-server communication)
- **Language**: TypeScript

## Infrastructure (Hosting)

- **VPS Provider**: Vultr (optimized CPU instances)
- **Load Balancer**: Nginx (WebSocket proxy, SSL termination)
- **Containerization**: Docker (multi-stage builds)
- **Monitoring**: Prometheus + Grafana
- **CI/CD**: GitHub Actions

## Cost Structure

- **100 users**: $30-60/month (single Vultr instance)
- **1,000 users**: $480-720/month (12-15 distributed instances)
- **10,000 users**: $4,800-7,200/month (120 instances, multi-region)

## Common Commands

### Development (Local)

```bash
# Run Node.js game server (from /server)
npm run dev
# Runs at http://localhost:3000

# Open Godot project (from /client)
# Use Godot Editor to run/debug

# Run both
npm run dev:server
# Open Godot Editor separately
```

### Build & Deploy

```bash
# Build Godot web export (from /client)
# Export → HTML5 in Godot Editor

# Build Docker image (from /server)
docker build -t game-server .

# Deploy to Vultr VPS
# Via GitHub Actions or manual SSH deployment
```

### Environment Setup

**Server (.env)**:
```
DATABASE_URL=postgresql://user:pass@localhost:5432/gamedb
REDIS_URL=redis://localhost:6379
PORT=3000
NODE_ENV=development
```

**Client (Godot project settings)**:
- WebSocket URL: `ws://localhost:3000` (dev)
- WebSocket URL: `wss://your-domain.com` (production)

### Testing MVP

1. Start PostgreSQL and Redis locally (Docker Compose recommended)
2. Run Node.js server: `npm run dev` (from /server)
3. Open Godot project and run HTML5 export
4. Test multiplayer: Open 2+ browser tabs
5. Verify: Player movement, combat, state sync, reconnection

## Key Dependencies

**Server**:
- `socket.io@^4.7.5` - Real-time networking
- `express@^4.18.0` - HTTP server
- `pg@^8.11.0` - PostgreSQL client
- `redis@^4.6.0` - Session management
- `prom-client@^15.1.0` - Metrics collection

**Client (Godot)**:
- Godot 4.3+ (download from godotengine.org)
- WebSocket support (built-in)
- HTML5 export templates

**Infrastructure**:
- `nginx@^1.28.0` - Reverse proxy
- `docker@^24.0.0` - Containerization
- `prometheus@^2.45.0` - Metrics
- `grafana@^10.0.0` - Visualization

## Platform-Specific Notes

**Windows (Adam)**:
- Install Node.js LTS from nodejs.org
- Install Godot 4.3+ from godotengine.org
- Docker Desktop for Windows (optional, for local testing)
- Git for Windows (already installed)

**Linux (Mical)**:
- Node.js via package manager or nvm
- Godot via package manager or official download
- Docker via package manager
- Standard git installation
