import Phaser from "phaser";

export function genAssets(scene:Phaser.Scene){
  const g = scene.make.graphics({ x:0,y:0, add:false });
  
  // Player: wizard hat color by tint later
  g.fillStyle(0x5ac8fa,1);
  g.fillCircle(16,16,14);
  g.generateTexture("player",32,32);
  g.clear();
  
  // Coin
  g.fillStyle(0xffd54f,1);
  g.fillCircle(8,8,8);
  g.generateTexture("coin",16,16);
  g.clear();
  
  // Zone mask ring
  g.fillStyle(0xffffff,1);
  g.fillCircle(64,64,64);
  g.generateTexture("circle128",128,128);
}
