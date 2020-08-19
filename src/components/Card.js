import React from "react";

export default function Card({ card, index, cardCounter }) {
  return (
    <>
      <div className="top rank">{card.card}</div>
      <div
        className={`bigsuit ${
          index === cardCounter ? "bigsuit-center" : "bigsuit-left"
        }`}
        dangerouslySetInnerHTML={{ __html: `${card.symbol}` }}
      ></div>
      <div className="bottom rank">{card.card}</div>
    </>
  );
}
