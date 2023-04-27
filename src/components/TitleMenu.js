import React, { Component } from "react";

export default function TitleMenu() {
  return (
    <div id="title-menu">
      Chess RPG
      <div id="menu-item-container">
        <div id="menu-item">New Game</div>
        <div id="menu-item">Settings</div>
        <div id="menu-item">Quit</div>
      </div>
    </div>
  );
}
