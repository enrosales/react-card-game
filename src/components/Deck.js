import React from "react";

export default function Deck({ cards, className }) {
  const top = 135,
    left = 27;
  const counterOfCardsMinusOne = cards.length - 1;
  return (
    <div className={className}>
      {cards.map((card, index) => {
        return (
          <div
            className={`card ${card.type}`}
            style={{ top: -index * top + "px", left: index * left + "px" }}
            key={card.card + card.value + card.type + card.symbol}
          >
            <div className="top rank">{card.card}</div>
            <div
              className={`bigsuit ${
                index === counterOfCardsMinusOne
                  ? "bigsuit-center"
                  : "bigsuit-left"
              }`}
              dangerouslySetInnerHTML={{ __html: `${card.symbol}` }}
            ></div>
            <div className="bottom rank">{card.card}</div>
          </div>
        );
      })}
    </div>
  );
}
