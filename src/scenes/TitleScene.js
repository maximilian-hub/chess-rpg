import Phaser from "phaser";
import React from "react";
import TitleUI from "../components/TitleUI";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("TitleScene");
  }

  preload() {
    this.load.image("vaporboard", "images/vaporboard.png");
  }

  create() {
    this.registry.get("setActiveUI")(<TitleUI />);

    this.vaporboard = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "vaporboard"
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
