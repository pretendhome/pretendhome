import { ClientMsg, ServerMsg, ClientInput, InputBits } from "./protocol";

export class NetClient {
  ws?:WebSocket;
  url:string;
  id="";
  room="";
  tick=0;
  seq=0;
  pending:ClientInput[]=[];
  onWelcome?:(m:any)=>void;
  onSnap?:(m:any)=>void;
  onOver?:(m:any)=>void;
  onError?:(msg:string)=>void;
  
  constructor(url:string){ this.url = url; }
  
  connect(name:string){
    this.ws = new WebSocket(this.url);
    this.ws.binaryType="arraybuffer";
    this.ws.onopen = () => this.send({t:"hello", name} as ClientMsg);
    this.ws.onmessage = ev => this.route(JSON.parse(ev.data) as ServerMsg);
    this.ws.onerror = () => this.onError?.("ws error");
    this.ws.onclose = () => this.onError?.("ws closed");
  }

  send(m:ClientMsg){ this.ws?.send(JSON.stringify(m)); }

  sendInput(dt:number, input:number){
    const msg:ClientInput = { t:"in", seq: ++this.seq, dt, input };
    this.pending.push(msg);
    this.send(msg);
  }

  route(m:ServerMsg){
    switch(m.t){
      case "welcome": this.id=m.id; this.room=m.room; this.tick=m.tick; this.onWelcome?.(m); break;
      case "snap": this.tick=m.tick; this.onSnap?.(m); break;
      case "over": this.onOver?.(m); break;
      case "err": this.onError?.(m.msg); break;
    }
  }
}

export function packInput(keys:Record<string,boolean>){
  let b=0;
  if(keys.Up) b|=InputBits.Up;
  if(keys.Down) b|=InputBits.Down;
  if(keys.Left) b|=InputBits.Left;
  if(keys.Right) b|=InputBits.Right;
  if(keys.Dash) b|=InputBits.Dash;
  return b;
}
