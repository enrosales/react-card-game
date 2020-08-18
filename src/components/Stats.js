import React from "react";

export default function Stats({ player, total }) {
  return (
    <div className="col-md-2 p-4" style={{ color: "yellow" }}>
      {player} : {total}
    </div>
  );
}
