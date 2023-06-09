import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { setScene } from "../store/slices/gameSlice";

export default function TitleUI(props) {
  const dispatch = useDispatch();

  function handlePlayButton() {
    dispatch(setScene("BattleScene"));
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
