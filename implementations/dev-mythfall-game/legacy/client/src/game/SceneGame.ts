import Phaser from "phaser";
import { genAssets } from "./assets";
import { NetClient, packInput } from "./NetClient";
import { Snapshot, InputBits, PlayerState } from "./protocol";

export class SceneGame extends Phaser.Scene {
  net!:NetClient;
  meId="";
  cursors!:Phaser.Types.Input.Keyboard.CursorKeys;
  space!:Phaser.Input.Keyboard.Key;
  lastTime=0; // for dt
  playerSprites = new Map<string, Phaser.GameObjects.Image>();
  coins = new Map<number, Phaser.Physics.Arcade.Image>();
  zone!:Phaser.GameObjects.Graphics;
  zoneState={x:400,y:300,r:999};
  
  constructor(){ super("game"); }

  init(data:{wsUrl:string; name:string}){ this.net = new NetClient(data.wsUrl); }

  preload(){ genAssets(this); }

  create(){
    const { width, height } = this.scale;
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.space = this.input.keyboard!.addKey("SPACE");

    // Connect
    this.net.onWelcome = (m:any)=>{ this.meId = m.id; };
    this.net.onSnap = (snap:Snapshot)=> this.applySnapshot(snap);
    this.net.onOver = (m)=>{ this.add.text(10,40, "Round over! Rematch soon.", { color:"#fff" }).setScrollFactor(0); };
    this.net.connect(prompt("Enter name") || "Mage");
    
    this.physics.world.setBounds(0,0,width,height);
    this.zone = this.add.graphics();
    this.lastTime = performance.now();
  }

  update(){
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastTime)/1000);
    this.lastTime = now;

    const keys = {
      Up: this.cursors.up.isDown,
      Down: this.cursors.down.isDown,
      Left: this.cursors.left.isDown,
      Right: this.cursors.right.isDown,
      Dash: Phaser.Input.Keyboard.JustDown(this.space)
    };
    this.net.sendInput(dt, packInput(keys));

    // Local prediction: gently move our sprite towards expected position (basic lerp)
    const me = this.playerSprites.get(this.meId);
    if(me){ /* optional client-side smoothing handled in applySnapshot */ }

    // Draw zone
    this.zone.clear();
    this.zone.lineStyle(3,0x88ccff,0.8);
    this.zone.strokeCircle(this.zoneState.x, this.zoneState.y, this.zoneState.r);
  }

  applySnapshot(s:Snapshot){
    // Players
    const seen=new Set<string>();
    s.players.forEach((p:PlayerState)=>{
      seen.add(p.id);
      let spr = this.playerSprites.get(p.id);
      if(!spr){
        spr = this.add.image(p.x, p.y, "player").setOrigin(0.5);
        this.playerSprites.set(p.id, spr);
      }
      // simple snap/lerp
      spr.x = Phaser.Math.Linear(spr.x, p.x, 0.6);
      spr.y = Phaser.Math.Linear(spr.y, p.y, 0.6);
    });
    // cleanup
    for(const [id,spr] of this.playerSprites) if(!seen.has(id)){ spr.destroy(); this.playerSprites.delete(id); }

    // Pickups
    const seenCoins=new Set<number>();
    for(const c of s.pickups){
      seenCoins.add(c.id);
      if(!this.coins.has(c.id)){
        const coin = this.physics.add.image(c.x, c.y, "coin") as Phaser.Physics.Arcade.Image;
        coin.setImmovable(true);
        (coin.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
        this.coins.set(c.id, coin);
      }
    }
    for(const [id,coin] of this.coins) if(!seenCoins.has(id)){ coin.destroy(); this.coins.delete(id); }

    // Zone
    this.zoneState = s.zone;
  }
}
