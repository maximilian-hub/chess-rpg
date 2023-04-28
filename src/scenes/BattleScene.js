import Phaser from "phaser";
import BattleUI from "../components/BattleUI";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super("BattleScene");
  }

  preload() {}

  create() {
    //this.registry.get("activeUI")(<BattleUI />);
  }

  update() {}
}
