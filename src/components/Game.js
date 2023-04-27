import React, { useRef, useEffect } from "react";
import Phaser from "phaser";

const Game = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    class MyScene extends Phaser.Scene {
      constructor() {
        super("MyScene");
      }

      preload() {
        this.load.image("vaporboard", "images/vaporboard.png");
      }

      create() {
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

    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: gameRef.current,
      scene: MyScene,
    };

    const game = new Phaser.Game(config);
    const scene = game.scene.keys["MyScene"];

    const onResize = () => {
      game.scale.resize(window.innerWidth, window.innerHeight);

      if (scene.vaporboard) {
        scene.centerImage();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      game.destroy(true);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <div ref={gameRef}></div>;
};

export default Game;
