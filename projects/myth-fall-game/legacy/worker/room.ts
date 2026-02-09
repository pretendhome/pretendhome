import { ClientMsg, ClientInput, ServerMsg, Snapshot, PlayerState, InputBits } from "./protocol";

type Conn = { id:string; ws:WebSocket; name:string; lastSeq:number; dashCd:number };

export class RoomDO {
  state: DurableObjectState;
  env: any;
  conns = new Map<string, Conn>();
  tick=0;
  width=800;
  height=600;
  pickups: { id:number; x:number; y:number }[] = [];
  zone = { x:400, y:300, r:999 };
  roundTime=60; // seconds
  timeLeft=this.roundTime;
  started=false;
  players = new Map<string, PlayerState>();
  timer?: any;
  
  constructor(state:DurableObjectState, env:any){ this.state=state; this.env=env; }
  
  async fetch(req:Request){
    const url = new URL(req.url);
    if(url.pathname === "/ws" && req.headers.get("Upgrade")==="websocket"){
      const pair = new WebSocketPair();
      await this.handleSocket(pair[1]);
      return new Response(null, { status:101, webSocket: pair[0] });
    }
    return new Response("Room OK");
  }
  
  async handleSocket(ws:WebSocket){
    ws.accept();
    const id = crypto.randomUUID();
    const conn:Conn = { id, ws, name:"", lastSeq:0, dashCd:0 };
    this.conns.set(id, conn);
    this.players.set(id, {
      id,
      x: Math.random()*this.width,
      y: Math.random()*this.height,
      vx:0, vy:0, score:0, anim:0
    });
    
    ws.addEventListener("message", (ev)=> this.onMessage(conn, ev.data));
    ws.addEventListener("close", ()=>{ this.conns.delete(id); this.players.delete(id); });
    
    // Welcome
    const msg:ServerMsg = { t:"welcome", id, room:"default", tick:this.tick, startsIn:3 };
    ws.send(JSON.stringify(msg));
    
    if(!this.timer){ this.startLoop(); }
  }
  
  startLoop(){
    const step = 1000/30; // 30 Hz
    let last = Date.now();
    this.started = true;
    this.timeLeft = this.roundTime;
    this.zone.r = 999;
    this.pickups = [];

    this.timer = setInterval(()=>{
      const now = Date.now();
      const dt = Math.min(0.05, (now - last)/1000);
      last = now;
      this.tick++;
      this.timeLeft = Math.max(0, this.timeLeft - dt);

      // Zone shrink after 30s
      if(this.timeLeft < 30){
        const t = (30 - this.timeLeft)/30;
        this.zone.r = 300*(1-t) + 30*t;
      }

      // Spawn pickups
      if(this.tick % 45 === 0 && this.pickups.length < 12){ // ~1.5s
        const id = Math.floor(Math.random()*1e9);
        this.pickups.push({
          id,
          x: 40+Math.random()*(this.width-80),
          y: 40+Math.random()*(this.height-80)
        });
      }

      // Integrate inputs (authoritative)
      for(const [id,p] of this.players){
        const c = this.conns.get(id);
        if(!c) continue;
        // dash cd tick
        c.dashCd = Math.max(0, c.dashCd - dt);
        // velocity reset each tick; apply last input (we keep only latest seq, cheap)
        // (For real use, queue inputs. MVP: last one wins)
        // Position integration done in onInput to keep it simple; here we clamp & zone effect
        // Zone slow if outside:
        const dx = p.x - this.zone.x, dy = p.y - this.zone.y;
        const outside = Math.hypot(dx,dy) > this.zone.r;
        if(outside){ p.vx *= 0.9; p.vy *= 0.9; }
        p.x = Math.max(16, Math.min(this.width-16, p.x + p.vx*dt));
        p.y = Math.max(16, Math.min(this.height-16, p.y + p.vy*dt));
      }

      // Pickup collisions
      for(const [id,p] of this.players){
        for(let i=this.pickups.length-1;i>=0;i--){
          const c = this.pickups[i];
          if(Math.hypot(p.x-c.x, p.y-c.y) < 20){
            p.score++;
            this.pickups.splice(i,1);
          }
        }
      }

      // Broadcast snapshot ~10Hz
      if(this.tick % 3 === 0){ // 30/3 = 10 Hz
        const snap:Snapshot = {
          t:"snap",
          tick:this.tick,
          players: Array.from(this.players.values()),
          pickups: this.pickups,
          zone: this.zone,
          endsIn: this.timeLeft
        };
        const s = JSON.stringify(snap);
        for(const c of this.conns.values()) try{ c.ws.send(s); }catch{}
      }

      // End round
      if(this.timeLeft <= 0){
        const scores:Record<string,number> = {};
        for(const [id,p] of this.players) scores[id]=p.score;
        const over:ServerMsg = { t:"over", scores, rematchIn:5 };
        const s = JSON.stringify(over);
        for(const c of this.conns.values()) try{ c.ws.send(s);}catch{}
        clearInterval(this.timer);
        this.timer = undefined;
        this.started=false;
        setTimeout(()=> this.startLoop(), 5000);
      }
    }, step);
  }
  
  onMessage(c:Conn, data:any){
    let m:ClientMsg;
    try{ m = JSON.parse(data.toString()); }catch{ return; }
    if(m.t === "hello"){ c.name = m.name || "Mage"; return; }
    if(m.t === "in"){ this.onInput(c, m as ClientInput); return; }
  }

  onInput(c:Conn, m:ClientInput){
    if(m.seq <= c.lastSeq) return;
    c.lastSeq = m.seq;
    const p = this.players.get(c.id);
    if(!p) return;

    const speed = 220;
    let vx=0, vy=0;
    if(m.input & InputBits.Left)  vx -= speed;
    if(m.input & InputBits.Right) vx += speed;
    if(m.input & InputBits.Up)    vy -= speed;
    if(m.input & InputBits.Down)  vy += speed;
    const len = Math.hypot(vx,vy);
    if(len>0){ vx*=1/Math.max(1,len/speed); vy*=1/Math.max(1,len/speed); }

    // dash
    if((m.input & InputBits.Dash) && c.dashCd<=0){
      const n = Math.hypot(vx,vy) || 1;
      p.x += (vx/n)*80;
      p.y += (vy/n)*80;
      c.dashCd = 0.3;
    }
    p.vx = vx;
    p.vy = vy;
  }
}
