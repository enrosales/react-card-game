import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

import Deck from "./Deck";
import Modal from "./Modal";
import Stats from "./Stats";
import Buttons from "./Buttons";

export default function Board({ game, onPlay, onReset, onCollect }) {
  const {
    cardsA,
    cardsB,
    cardsOnBoardToFightPlayerA,
    cardsOnBoardToFightPlayerB
  } = game;

  if (cardsA.length === 0 || cardsB.length === 0) {
    // mostrar el perdedor e iniciar juego nuevo
  }
  return (
    <div className="board">
      <div className="row" style={{ maxHeight: "220px" }}>
        <Deck cards={cardsA} className="col-md-10 p-4 card-container" />
        <Stats player={"Player A cards"} total={cardsA.length} />
      </div>
      <div
        className="row"
        style={{
          minHeight: "150px",
          maxHeight: "150px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Buttons onPlay={onPlay} onReset={onReset} onCollect={onCollect} />
        <Deck
          cards={cardsOnBoardToFightPlayerA}
          className="col-md-4 card-container"
        />
        <Deck
          cards={cardsOnBoardToFightPlayerB}
          className="col-md-4 card-container"
        />
      </div>
      <div className="row" style={{ maxHeight: "300px" }}>
        <Deck cards={cardsB} className="col-md-10 p-4 card-container" />
        <Stats player={"Player B cards"} total={cardsB.length} />
      </div>
    </div>
  );
}
Board.propTypes = {
  game: PropTypes.object.isRequired,
  onPlay: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCollect: PropTypes.func.isRequired
};
