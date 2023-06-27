import Phaser from "phaser";

class TitleScene extends Phaser.Scene {
  constructor() {
    super("TitleScene");
  }

  preload() {
    this.load.image("background", "images/vaporboard.png");
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

export default TitleScene;
