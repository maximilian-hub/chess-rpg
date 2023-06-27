import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { setScene } from "../store/slices/gameSlice";

export default function BattleUI(props) {
  const dispatch = useDispatch();

  function handleBackButton() {
    dispatch(setScene("TitleScene"));
  }

  return (
    <div id="battle-ui">
      <div id="menu-item" onClick={handleBackButton}>
        Back to Title
      </div>
    </div>
  );
}
