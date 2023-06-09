import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("TitleScene");
  }

  preload() {
    this.load.image("background", "images/vaporboard.png");
  }

  create() {
    this.vaporboard = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "background"
    );
  }

  update() {}

  centerImage() {
    this.vaporboard.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
  }
}
