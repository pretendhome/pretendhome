# MythFall Development Environment Setup

## Overview

This guide covers environment setup for both team members:
- **Adam** (Windows + Kiro IDE)
- **Mical** (Linux + Kiro CLI)

## Prerequisites

### Both Platforms

- **Git** - Version control
- **Node.js LTS** (v20+) - Server runtime
- **Godot 4.3+** - Game engine
- **Docker** (optional) - For local PostgreSQL/Redis

---

## Windows Setup (Adam)

### 1. Node.js Installation

1. Download Node.js LTS from [nodejs.org](https://nodejs.org/)
2. Run installer (use default settings)
3. Verify installation:
```cmd
node --version
npm --version
```

### 2. Godot Installation

1. Download Godot 4.3+ Standard (not .NET) from [godotengine.org](https://godotengine.org/download)
2. Extract to `C:\Godot\`
3. Add to PATH (optional):
   - Right-click "This PC" → Properties → Advanced System Settings
   - Environment Variables → System Variables → Path → Edit
   - Add `C:\Godot\`
4. Run Godot Editor
5. Install HTML5 export templates:
   - Editor → Manage Export Templates → Download and Install

### 3. Docker Desktop (Optional)

1. Download from [docker.com](https://www.docker.com/products/docker-desktop/)
2. Run installer
3. Restart computer
4. Verify: `docker --version`

### 4. Clone Repository

```cmd
git clone https://github.com/jkj9786/Myth-Fall-Game.git
cd Myth-Fall-Game
```

### 5. Install Dependencies

```cmd
npm install
```

### 6. Start Development Services

**Option A: Docker Compose (Recommended)**
```cmd
cd deployment\docker
docker-compose up -d
```

**Option B: Manual (if no Docker)**
- Install PostgreSQL 16 from [postgresql.org](https://www.postgresql.org/download/windows/)
- Install Redis from [redis.io](https://redis.io/download) (or use WSL)

### 7. Configure Environment

```cmd
cd server
copy .env.example .env
```

Edit `server/.env` with your database credentials.

### 8. Start Server

```cmd
npm run dev:server
```

Server should start on `http://localhost:3000`

### 9. Open Godot Project

1. Launch Godot Editor
2. Click "Import"
3. Navigate to `client/` directory
4. Select `project.godot` (will be created in Phase 0)

---

## Linux Setup (Mical)

### 1. Node.js Installation

**Option A: Package Manager (Ubuntu/Debian)**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Option B: nvm (Recommended)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

Verify:
```bash
node --version
npm --version
```

### 2. Godot Installation

**Option A: Official Download**
```bash
wget https://downloads.tuxfamily.org/godotengine/4.3/Godot_v4.3_linux.x86_64.zip
unzip Godot_v4.3_linux.x86_64.zip
chmod +x Godot_v4.3_linux.x86_64
sudo mv Godot_v4.3_linux.x86_64 /usr/local/bin/godot
```

**Option B: Package Manager (if available)**
```bash
# Check your distro's package manager
sudo apt search godot  # Ubuntu/Debian
sudo dnf search godot  # Fedora
```

Install HTML5 export templates:
```bash
godot --headless --export-templates
```

### 3. Docker Installation

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io docker-compose
sudo usermod -aG docker $USER
# Log out and back in for group changes

# Verify
docker --version
docker-compose --version
```

### 4. Clone Repository

```bash
git clone https://github.com/jkj9786/Myth-Fall-Game.git
cd Myth-Fall-Game
```

### 5. Install Dependencies

```bash
npm install
```

### 6. Start Development Services

```bash
cd deployment/docker
docker-compose up -d
```

### 7. Configure Environment

```bash
cd ../../server
cp .env.example .env
```

Edit `server/.env` with your database credentials.

### 8. Start Server

```bash
npm run dev:server
```

Server should start on `http://localhost:3000`

### 9. Open Godot Project (GUI)

```bash
cd ../client
godot project.godot  # Will be created in Phase 0
```

---

## Verification Checklist

### Server
- [ ] Node.js installed (`node --version`)
- [ ] Dependencies installed (`npm install` successful)
- [ ] PostgreSQL running (port 5432)
- [ ] Redis running (port 6379)
- [ ] Server starts without errors (`npm run dev:server`)
- [ ] Health check responds: `curl http://localhost:3000/health`

### Client
- [ ] Godot 4.3+ installed
- [ ] HTML5 export templates installed
- [ ] Can open Godot Editor
- [ ] Can create/run basic project

### Docker (Optional)
- [ ] Docker installed (`docker --version`)
- [ ] Docker Compose installed (`docker-compose --version`)
- [ ] Containers start: `docker-compose up -d`
- [ ] Containers healthy: `docker ps`

---

## Common Issues

### Windows

**"npm not recognized"**
- Restart terminal after Node.js installation
- Verify PATH includes Node.js directory

**Docker Desktop won't start**
- Enable Hyper-V in Windows Features
- Enable WSL 2 (Windows Subsystem for Linux)

**Godot won't run**
- Install Visual C++ Redistributable from Microsoft
- Check antivirus isn't blocking Godot

### Linux

**Permission denied (Docker)**
- Add user to docker group: `sudo usermod -aG docker $USER`
- Log out and back in

**Godot missing dependencies**
```bash
sudo apt-get install libxcursor1 libxinerama1 libxi6 libxrandr2 libgl1
```

**Port already in use**
```bash
# Find process using port 3000
sudo lsof -i :3000
# Kill process
sudo kill -9 <PID>
```

---

## Next Steps

1. Verify all services are running
2. Proceed to Phase 0: Technology Stack Validation
3. Create basic Godot project
4. Test WebSocket connection between client and server
5. Validate 60 FPS in HTML5 export

---

## Support

- **Documentation**: See `README.md` and `shared/protocol.md`
- **Issues**: GitHub Issues
- **Team Communication**: [Your communication channel]
