# MythFall

**Mythology-themed multiplayer open-world RPG**

Explore ancient mythological realms, collect powers from world mythology, and battle mythic creatures in this web-based action RPG.

## Quick Start

### Prerequisites
- Node.js 20+ (LTS)
- Godot 4.3+
- Docker (optional, for local database)

### Installation

```bash
# Clone repository
git clone https://github.com/jkj9786/Myth-Fall-Game.git
cd Myth-Fall-Game

# Install dependencies
npm install

# Start development services (PostgreSQL + Redis)
cd deployment/docker
docker-compose up -d
cd ../..

# Configure server
cd server
cp .env.example .env
# Edit .env with your settings

# Start server
npm run dev:server
```

For detailed setup instructions, see [SETUP.md](SETUP.md).

## Project Structure

```
/
├── client/          # Godot game project (HTML5/WebAssembly)
├── server/          # Node.js + Socket.io backend
├── shared/          # Protocol types and documentation
├── deployment/      # Docker configs, CI/CD
└── legacy/          # Archived previous projects
```

## Tech Stack

- **Client**: Godot 4.3+ (HTML5 export)
- **Server**: Node.js + Socket.io + TypeScript
- **Database**: PostgreSQL 16
- **Session**: Redis
- **Hosting**: Vultr VPS + Nginx

## Development

- **Server**: `npm run dev:server` (runs on port 3000)
- **Client**: Open `client/project.godot` in Godot Editor
- **Tests**: `npm test`

## Documentation

- [Setup Guide](SETUP.md) - Environment setup for Windows and Linux
- [Protocol Documentation](shared/protocol.md) - Network protocol specification
- [Product Vision](.kiro/steering/product.md) - Game design and vision
- [Tech Stack](.kiro/steering/tech.md) - Technology choices
- [Project Structure](.kiro/steering/structure.md) - Code organization

## Team

- **Adam Neill** - Client (Godot) + Windows
- **Mical** - Server (Node.js) + Linux

## License

MIT
