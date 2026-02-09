import { RoomDO } from "./room";

export { RoomDO };

export default {
  async fetch(req:Request, env:any){
    const url = new URL(req.url);
    if(url.pathname === "/ws"){
      const id = env.ROOM.idFromName("default");
      const stub = env.ROOM.get(id);
      return stub.fetch("https://room/ws", { headers: { Upgrade: "websocket" } });
    }
    return new Response("OK");
  }
} satisfies ExportedHandler;
