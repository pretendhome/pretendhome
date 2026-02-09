// Keep in sync with /worker/protocol.ts (duplicated for now).

export type ClientHello = { t:"hello"; name:string };
export type ClientInput = { t:"in"; seq:number; dt:number; input:number }; // bitfield
export type ClientMsg = ClientHello | ClientInput | { t:"ready" };

export type PlayerState = { id:string; x:number; y:number; vx:number; vy:number; score:number; anim:number };
export type Pickup = { id:number; x:number; y:number };
export type Snapshot = { t:"snap"; tick:number; players:PlayerState[]; pickups:Pickup[]; zone:{x:number;y:number;r:number}; endsIn:number };
export type ServerHello = { t:"welcome"; id:string; room:string; tick:number; startsIn:number };
export type ServerOver = { t:"over"; scores:Record<string,number>; rematchIn:number };
export type ServerMsg = ServerHello | Snapshot | ServerOver | { t:"err"; msg:string };

export const InputBits = { Up:1<<0, Down:1<<1, Left:1<<2, Right:1<<3, Dash:1<<4 };
