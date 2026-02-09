import Phaser from "phaser";
import { SceneGame } from "./game/SceneGame";

const wsUrl = (import.meta as any).env?.VITE_WS_URL || "ws://localhost:8787/ws";

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  backgroundColor: "#12131a",
  scene: [{
    key:"game",
    active:true,
    create(){
      this.scene.start("game",{wsUrl:wsUrl,name:"Mage"});
    }
  }, SceneGame],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y:0 },
      debug:false
    }
  }
});
