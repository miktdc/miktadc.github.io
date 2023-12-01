import React from "react";
import "./Tile.css";

const Tile = ({ title, body }) => {
  return (
    <div className="tileMain">
      <div className="tileTitle">{title}</div>
      <div className="tileBody">{body}</div>
    </div>
  );
};

export default Tile;
