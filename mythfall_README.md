# Myth Fall Game

Blox Fruits-style multiplayer game built with Godot 4.3+, Socket.io, and Vultr VPS infrastructure.

## Project Status

🚧 **Initial Setup Phase** - Palette system installed, project structure in progress

## Tech Stack

- **Game Engine**: Godot 4.3+ (HTML5/WebAssembly export)
- **Networking**: Socket.io (Node.js server)
- **Database**: PostgreSQL 18
- **Hosting**: Vultr VPS
- **Development**: Palette FDE methodology

## Team

- **Adam Neill** (Engineer - Windows/Kiro IDE)
- **Mical** (FDE - Linux/Kiro CLI)

## Development Approach

This project follows the Palette three-tier system for high-trust, high-velocity development:
- `palette-core.md` - Immutable collaboration principles
- `assumptions.md` - Experimental agent logic
- `decisions.md` - Engagement log and control surface

## Repository Structure

```
/
├── legacy/          # Archived previous attempts
├── client/          # Godot game client (to be created)
├── server/          # Node.js Socket.io server (to be created)
├── shared/          # Common protocols and types (to be created)
└── deployment/      # Docker and infrastructure configs (to be created)
```

## Getting Started

Documentation and setup instructions will be added as the project progresses.

## Cost Target

~$0.48 per concurrent user monthly at 1,000 user scale

## License

TBD
