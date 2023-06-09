import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { setScene } from "../store/slices/gameSlice";

export default function BattleUI(props) {
  const dispatch = useDispatch();

  function handleBackButton() {
    dispatch(setScene("TitleScene"));
  }

  return (
    <div id="title-ui">
      Battle Scene
      <div id="menu-item-container">
        <div id="menu-item" onClick={handleBackButton}>
          Back to Title
        </div>
      </div>
    </div>
  );
}
