import React from "react";
import "./Touchable.css";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow.svg";
export const Touchable = ({ onHover, onHoverOut, text }) => {
  return (
    <div style={{ textAlign: "center", width: "200px" }}>
      <div
        className="touchable"
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      >
        <div className="touchable-arrow">
          <Arrow />
        </div>
        {text}
      </div>
    </div>
  );
};
