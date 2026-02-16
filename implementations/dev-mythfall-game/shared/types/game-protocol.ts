/**
 * MythFall Game Protocol
 * Shared types between client (Godot) and server (Node.js)
 * 
 * Note: Godot client must implement equivalent types in GDScript
 * See: client/scripts/protocol.gd
 */

// ============================================================================
// Client → Server Messages
// ============================================================================

export interface ClientHello {
  type: 'ClientHello';
  authToken?: string;
  playerName: string;
}

export interface ClientInput {
  type: 'ClientInput';
  sequenceNumber: number;
  timestamp: number;
  movement: {
    x: number;
    y: number;
  };
  actions: {
    attack?: boolean;
    ability?: number; // Ability slot index
    interact?: boolean;
  };
}

export interface ClientReady {
  type: 'ClientReady';
}

export type ClientMessage = ClientHello | ClientInput | ClientReady;

// ============================================================================
// Server → Client Messages
// ============================================================================

export interface ServerHello {
  type: 'ServerHello';
  playerId: string;
  roomId: string;
  serverTime: number;
}

export interface Snapshot {
  type: 'Snapshot';
  timestamp: number;
  players: PlayerState[];
  npcs: NPCState[];
  items: ItemState[];
}

export interface ServerEvent {
  type: 'ServerEvent';
  eventType: 'player_joined' | 'player_left' | 'item_collected' | 'combat_hit';
  data: any;
}

export interface ServerOver {
  type: 'ServerOver';
  reason: string;
}

export type ServerMessage = ServerHello | Snapshot | ServerEvent | ServerOver;

// ============================================================================
// Game State Types
// ============================================================================

export interface PlayerState {
  id: string;
  name: string;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  health: number;
  maxHealth: number;
  level: number;
  mythicPowers: string[]; // Power IDs
}

export interface NPCState {
  id: string;
  type: string;
  position: { x: number; y: number };
  health: number;
  maxHealth: number;
}

export interface ItemState {
  id: string;
  type: string;
  position: { x: number; y: number };
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}
