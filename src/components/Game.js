import React, { useRef, useEffect, useState } from "react";
import Phaser from "phaser";
import TitleScene from "../scenes/TitleScene.js";
import BattleScene from "../scenes/BattleScene.js";

const Game = () => {
  const gameRef = useRef(null);
  const [activeUI, setActiveUI] = useState(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      scene: [TitleScene, BattleScene],
      parent: gameRef.current,
    };

    const game = new Phaser.Game(config); // create the game canvas
    game.registry.set("setActiveUI", setActiveUI); // register the component-rendering function TODO: is that accurate?
    const scene = game.scene.keys["TitleScene"];

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="phaser-container">
      {activeUI}
      <div ref={gameRef}></div>
    </div>
  );
};

export default Game;
