import React from "react";

export default function Buttons({ onPlay, onReset, onCollect }) {
  return (
    <div
      className="col-md-4"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button className="btn btn-warning m-1" onClick={onPlay}>
        Play
      </button>
      <button className="btn btn-primary m-1" onClick={onCollect}>
        Collect
      </button>
      <button className="btn btn-danger m-1" onClick={onReset}>
        Reset!
      </button>
    </div>
  );
}
