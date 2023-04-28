import React, { Component } from "react";

export default function TitleUI(props) {
  function handlePlayButton() {
    props.switchScene("BattleScene");
  }

  return (
    <div id="title-ui">
      Chess RPG
      <div id="menu-item-container">
        <div id="menu-item" onClick={handlePlayButton}>
          Play
        </div>
        <div id="menu-item">Settings</div>
        <div id="menu-item">Quit</div>
      </div>
    </div>
  );
}
