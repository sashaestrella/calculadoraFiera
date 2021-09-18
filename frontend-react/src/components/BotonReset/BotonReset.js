import React from "react";
import "./BotonReset.css";

const BotonReset = ({ children, handleClick }) => {
  return (
    <div className="clear-button" onClick={handleClick}>
      {children}
    </div>
  );
};

export default BotonReset;