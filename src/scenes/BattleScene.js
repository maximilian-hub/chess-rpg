import Phaser from "phaser";

class BattleScene extends Phaser.Scene {
  constructor() {
    super("BattleScene");
  }

  preload() {
    this.load.image("background", "images/grass_bg.png");
  }

  create() {
    this.bg = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "background"
    );
  }

  update() {}

  centerImage() {
    this.bg.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
  }
}

export default BattleScene;
