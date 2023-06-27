import Phaser from "phaser";
import store from "../store/store.js";

class BootstrapperScene extends Phaser.Scene {
  constructor() {
    super("BootstrapperScene");
  }

  preload() {}

  create() {
    store.subscribe(() => {
      console.log("PHASER: Store updated.");

      const state = store.getState();
      const activeScene = state.game.activeScene;
      //console.log(activeScene);
      const sceneKeys = this.scene.manager.getScenes(); // grab all active scenes
      console.log(sceneKeys);

      // stop all scenes other than the active scene:
      for (let sceneKey of sceneKeys) {
        if (sceneKey !== activeScene && sceneKey !== "BootstrapperScene") {
          this.scene.stop(sceneKey);
          console.log("Stopping:");
          console.log(sceneKey);
        }
      }

      // start the active scene (if it's not already running):
      if (!this.scene.isActive(activeScene)) {
        this.scene.start(activeScene);
        console.log("Starting:");
        console.log(activeScene);
      }
    });

    this.scene.start("TitleScene");
  }

  update() {}

  centerImage() {}
}

export default BootstrapperScene;
