# MythFall Network Protocol

## Overview

MythFall uses WebSocket communication via Socket.io for real-time multiplayer. The server is authoritative - all game state is validated and maintained server-side.

## Connection Flow

1. **Client connects** → Socket.io handshake
2. **Client sends `ClientHello`** → Authentication + player name
3. **Server responds `ServerHello`** → Assigns player ID and room
4. **Client sends `ClientReady`** → Ready to receive game state
5. **Server starts sending `Snapshot`** → Game state updates (50ms intervals)
6. **Client sends `ClientInput`** → Player actions (as they occur)
7. **Server broadcasts `ServerEvent`** → Game events to all clients

## Message Types

### Client → Server

#### ClientHello
```typescript
{
  type: 'ClientHello',
  authToken?: string,      // Optional JWT token
  playerName: string       // Display name
}
```

#### ClientInput
```typescript
{
  type: 'ClientInput',
  sequenceNumber: number,  // Incremental for reconciliation
  timestamp: number,       // Client timestamp
  movement: {
    x: number,             // -1 to 1 (normalized)
    y: number              // -1 to 1 (normalized)
  },
  actions: {
    attack?: boolean,
    ability?: number,      // Ability slot (0-9)
    interact?: boolean
  }
}
```

#### ClientReady
```typescript
{
  type: 'ClientReady'
}
```

### Server → Client

#### ServerHello
```typescript
{
  type: 'ServerHello',
  playerId: string,        // Unique player ID
  roomId: string,          // Room/instance ID
  serverTime: number       // Server timestamp for sync
}
```

#### Snapshot
```typescript
{
  type: 'Snapshot',
  timestamp: number,       // Server timestamp
  players: PlayerState[],  // All players in room
  npcs: NPCState[],        // All NPCs in room
  items: ItemState[]       // All items in room
}
```

#### ServerEvent
```typescript
{
  type: 'ServerEvent',
  eventType: 'player_joined' | 'player_left' | 'item_collected' | 'combat_hit',
  data: any                // Event-specific data
}
```

#### ServerOver
```typescript
{
  type: 'ServerOver',
  reason: string           // Disconnect reason
}
```

## Client Prediction & Reconciliation

1. **Client sends input** with sequence number
2. **Client predicts** movement locally (immediate feedback)
3. **Server validates** and applies input
4. **Server sends snapshot** with authoritative state
5. **Client reconciles** if prediction differs from server

## Network Timing

- **Server tick rate**: 20 Hz (50ms intervals)
- **Snapshot broadcast**: Every 50ms
- **Client input**: As events occur (not throttled)
- **Target latency**: <100ms roundtrip

## Godot Implementation Notes

Godot client must implement equivalent types in `client/scripts/protocol.gd`:

```gdscript
# Example structure (not complete)
class_name Protocol

enum MessageType {
    CLIENT_HELLO,
    CLIENT_INPUT,
    CLIENT_READY,
    SERVER_HELLO,
    SNAPSHOT,
    SERVER_EVENT,
    SERVER_OVER
}

class ClientInput:
    var sequence_number: int
    var timestamp: int
    var movement: Vector2
    var actions: Dictionary
```

## Security Considerations

- All inputs validated server-side
- Movement speed clamped to prevent cheating
- Ability cooldowns enforced server-side
- Combat damage calculated server-side only
- JWT tokens for authentication (optional for MVP)
