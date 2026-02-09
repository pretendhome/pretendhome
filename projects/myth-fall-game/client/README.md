# MythFall Client (Godot)

## Setup Instructions

### Prerequisites

- **Godot 4.3+** - Download from [godotengine.org](https://godotengine.org/download)
- **HTML5 Export Templates** - Install via Godot Editor

### Installation

#### Windows (Adam)
1. Download Godot 4.3+ (Standard version, not .NET)
2. Extract to a folder (e.g., `C:\Godot\`)
3. Run `Godot_v4.3_win64.exe`
4. In Godot Editor: Editor → Manage Export Templates → Download and Install

#### Linux (Mical)
```bash
# Option 1: Download from godotengine.org
wget https://downloads.tuxfamily.org/godotengine/4.3/Godot_v4.3_linux.x86_64.zip
unzip Godot_v4.3_linux.x86_64.zip
chmod +x Godot_v4.3_linux.x86_64
./Godot_v4.3_linux.x86_64

# Option 2: Package manager (if available)
# Check your distro's package manager for godot4
```

### Opening the Project

1. Launch Godot Editor
2. Click "Import"
3. Navigate to this `client/` directory
4. Select `project.godot` (will be created in Phase 0)
5. Click "Import & Edit"

### Project Structure (To Be Created)

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

### Development Workflow

1. **Run locally**: Press F5 in Godot Editor (runs in desktop mode)
2. **Test HTML5 export**: Project → Export → HTML5 → Export Project
3. **Connect to server**: Update WebSocket URL in `scripts/network_client.gd`

### WebSocket Configuration

**Development** (local server):
```gdscript
const SERVER_URL = "ws://localhost:3000"
```

**Production** (deployed server):
```gdscript
const SERVER_URL = "wss://your-domain.com"
```

### HTML5 Export Settings

- **Export Type**: HTML5
- **Texture Format**: WebP (smaller file size)
- **Compression**: Brotli (best compression)
- **Target Size**: <10MB initial load
- **WebGL Version**: 2.0

### Testing Multiplayer

1. Start the Node.js server: `npm run dev:server` (from root)
2. Run Godot project in editor (F5)
3. Open browser to exported HTML5 build
4. Test with 2+ clients simultaneously

### Common Issues

**WebSocket connection fails**:
- Verify server is running (`npm run dev:server`)
- Check SERVER_URL matches server port
- Ensure firewall allows WebSocket connections

**HTML5 export doesn't work**:
- Install HTML5 export templates in Godot
- Check browser console for errors
- Verify WebGL 2.0 support in browser

**Performance issues**:
- Reduce sprite resolution
- Optimize scene complexity
- Check browser performance profiler

### Next Steps (Phase 0)

1. Create basic Godot project structure
2. Implement WebSocket client (Socket.io compatible)
3. Create simple player character with movement
4. Test connection to Node.js server
5. Validate 60 FPS in HTML5 export

---

**Note**: This directory is currently a placeholder. The actual Godot project will be created during Phase 0 (Technology Stack Validation).
