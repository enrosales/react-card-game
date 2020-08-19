import React from "react";
import Card from "./Card";

export default function Deck({ cards, className }) {
  const counterOfCardsMinusOne = cards.length - 1;
  return (
    <div className={className}>
      {cards.map((card, index) => {
        return (
          <div
            className={`card ${card.type}`}
            key={card.card + card.value + card.type + card.symbol}
          >
            <Card
              card={card}
              index={index}
              cardCounter={counterOfCardsMinusOne}
            />
          </div>
        );
      })}
    </div>
  );
}
