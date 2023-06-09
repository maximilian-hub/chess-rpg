import React, { useRef, useEffect, useState } from "react";
import Phaser from "phaser";
import TitleScene from "../scenes/TitleScene.js";
import BattleScene from "../scenes/BattleScene.js";
import TitleUI from "./TitleUI.js";
import BattleUI from "./BattleUI.js";
import store from "../store/store.js";
import { useSelector } from "react-redux";

const Game = () => {
  const gameRef = useRef(null);

  const activeScene = useSelector((state) => state.game.activeScene);

  let activeUI;
  switch (activeScene) {
    case "TitleScene":
      activeUI = <TitleUI />;
      break;
    case "BattleScene":
      activeUI = <BattleUI />;
      break;
  }
  console.log(activeUI);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      scene: [TitleScene, BattleScene],
      parent: gameRef.current,
      reduxStore: store,
    };

    const game = new Phaser.Game(config); // create the game canvas

    return () => {
      game.destroy(true); // TODO: What's this doing?
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
