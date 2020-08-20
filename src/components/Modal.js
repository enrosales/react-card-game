import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Modal({ winner, onReset }) {
  return ReactDOM.createPortal(
    <div className="modal-root">
      <div className="row">
        <div
          className="col-md-6 offset-md-3"
          style={{
            border: "1px solid black",
            marginTop: "10%",
            borderRadius: "0.5rem",
            background: "white",
            opacity: "100%",
          }}
        >
          <div className="modal-title">
            <div className="title">
              <h2>Game over...</h2>
            </div>
            <button
              style={{ border: "none", background: "none" }}
              onClick={onReset}
            >
              x
            </button>
          </div>
          <hr />
          <div className="modal-body">
            <h3>Winner is: {winner} </h3>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onReset}>
              Start new game
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
