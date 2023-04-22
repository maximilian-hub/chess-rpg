import React, { useRef, useEffect } from "react";
import Phaser from "phaser";

const PhaserGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      // Add your preloading logic here
    }

    function create() {
      // Add your game creation logic here
    }

    function update() {
      // Add your game update logic here
    }

    return () => {
      // Clean up the game instance when the component is unmounted
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef}></div>;
};

export default PhaserGame;
