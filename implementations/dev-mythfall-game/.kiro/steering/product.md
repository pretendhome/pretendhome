# Product Overview

**MythFall** is an open-world multiplayer action RPG where players explore ancient mythological realms, collect powers from world mythology, and battle mythic creatures. Built for web-first deployment with anime-inspired visuals and accessible gameplay.

## Core Vision

**Theme**: Powers from world mythology (Greek, Norse, Egyptian, Japanese, Celtic, Hindu, Aztec, etc.)  
**Setting**: Ancient mythological realm with interconnected zones  
**Art Style**: Anime-inspired but original, vibrant and dynamic  
**Tone**: Fun and adventurous early game, mysterious and epic late game  
**Target Audience**: Players who enjoy exploration, progression, and mythological themes

## Core Gameplay

### Exploration (Primary Loop)
- **Open Zones**: Large explorable mythological realms (50 players per instance)
- **Zone Variety**: Greek Olympus, Norse Asgard, Egyptian Duat, Japanese Spirit Realm, etc.
- **Secrets & Discovery**: Hidden mythic artifacts, lore fragments, rare creatures
- **Seamless Within Zones**: No loading during exploration, transitions between major realms

### Combat System
- **Real-Time Action**: Melee attacks, ranged abilities, dodging, combos
- **Mythic Powers**: Collectible abilities from different pantheons (Zeus lightning, Thor hammer, Ra sun beam)
- **Server-Authoritative**: All combat validated server-side for fairness
- **PvE Focus**: Mythic creatures, bosses, world events
- **PvP Endgame**: Competitive arena unlocked for experienced players

### Progression System
- **Experience & Leveling**: Gain XP from exploration, combat, quests
- **Mythic Artifacts**: Collect relics to unlock powers from different mythologies
- **Skill Trees**: Customize abilities within each mythic power set
- **Equipment**: Armor, weapons, accessories with mythological themes
- **Stat Allocation**: Strength, agility, wisdom, vitality

### Multiplayer Features
- **Instanced Zones**: 50 players per zone instance
- **Cooperative Exploration**: Players can team up for dungeons and bosses
- **Trading System**: Exchange artifacts, equipment, resources
- **Endgame Arena**: Competitive PvP for experienced players with accumulated powers

## World Structure

### Mythological Realms (Zones)
1. **Starter Realm**: Tutorial area, mixed mythology, friendly atmosphere
2. **Greek Realm**: Mount Olympus, Underworld, Mediterranean landscapes
3. **Norse Realm**: Asgard, Midgard, Jotunheim, frozen mountains
4. **Egyptian Realm**: Pyramids, desert temples, Duat underworld
5. **Japanese Realm**: Spirit forests, shrines, yokai territories
6. **Endgame Arena**: Competitive battleground for max-level players

### Zone Characteristics
- **Size**: Large enough for 30-60 minutes of exploration per zone
- **Capacity**: 50 concurrent players per instance
- **Transitions**: Loading screen between major realms, seamless within zones
- **Atmosphere**: Each realm has unique visual style, music, and tone

## Network Architecture

- **Server Tick Rate**: 20 Hz authoritative game loop
- **State Sync**: Server broadcasts every 50ms for smooth gameplay
- **Client Prediction**: Movement and input handling with server reconciliation
- **WebSocket Transport**: Socket.io for real-time bidirectional communication
- **Zone Instancing**: Automatic matchmaking into zone instances

## Target Metrics

- **Performance**: 60 FPS target on mid-range devices
- **Cost**: ~$0.48 per concurrent user monthly at 1,000 user scale
- **Latency**: Sub-100ms roundtrip times
- **Scalability**: Horizontal scaling across multiple VPS instances
- **Accessibility**: Web-first (HTML5/WebAssembly), no downloads required

## Development Phases

### Phase 0: Pre-Code Risk Reduction
- Architecture validation
- Godot + Socket.io prototype
- Zone instancing proof-of-concept
- Asset pipeline setup

### Phase 1: Minimal Viable Slice
- Single starter zone (small, explorable)
- Basic movement and combat
- 1-2 mythic powers (Zeus lightning, Thor hammer)
- Simple enemy AI
- Multiplayer networking (10-20 players)

### Phase 2: Core Loop Validation
- 2-3 full mythological realms
- 5-10 mythic powers
- Progression system (leveling, stats)
- Boss encounters
- Load testing (50 players per zone)

### Phase 3: Content Expansion
- Additional realms and powers
- Trading system
- Endgame arena
- Polish and optimization

### Phase 4: Hardening & Launch
- Monitoring and observability
- Deployment automation
- Security hardening
- Performance optimization
- Documentation

## Differentiation from Blox Fruits

**What We Share** (Inspired By):
- Multiplayer action combat
- Collectible power system
- Player progression
- Web accessibility

**What Makes Us Unique**:
- ❌ NOT pirate/anime theme → ✅ World mythology theme
- ❌ NOT Devil Fruits → ✅ Mythic Artifacts from various cultures
- ❌ NOT island-hopping → ✅ Large explorable mythological realms
- ❌ NOT One Piece references → ✅ Original mythology-inspired lore
- ✅ Exploration-focused (not just combat arenas)
- ✅ Endgame PvP arena (not constant PvP)
- ✅ Anime-inspired but original art style
