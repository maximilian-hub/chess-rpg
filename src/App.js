import React from "react";
import Game from "./components/Game";
import TitleMenu from "./components/TitleMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TitleMenu />
      <Game></Game>
    </div>
  );
}

export default App;
