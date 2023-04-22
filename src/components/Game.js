import React, { useRef, useEffect } from "react";
import Phaser from "phaser";

const Game = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    // Create a new Phaser.Scene class
    class MyScene extends Phaser.Scene {
      constructor() {
        super("MyScene");
      }

      preload() {
        // Load your image asset
        this.load.image("vaporboard", "images/vaporboard.png");
      }

      create() {
        // Create an image game object using the loaded asset
        this.add.image(400, 300, "vaporboard");
      }

      update() {
        // Update your game logic (not needed for simply rendering an image)
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: MyScene,
    };

    const game = new Phaser.Game(config);

    return () => {
      // Clean up the game instance when the component is unmounted
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef}></div>;
};

export default Game;
