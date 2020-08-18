import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./components/Board";
import { play, collect, reset } from "./logic/operations";

let initialState = reset();
function App() {
  const [game, setGame] = useState(initialState);

  const handlePlay = () => {
    setGame(play(game));
  };
  const handleReset = () => {
    initialState = reset();
    setGame(initialState);
  };
  const handleCollect = () => {
    setGame(collect(game));
  }
  return (
    <Board
    game={game}
    onPlay={handlePlay}
    onReset={handleReset}
    onCollect={handleCollect}
    />
  );
}

export default App;
