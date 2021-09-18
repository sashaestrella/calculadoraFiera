import React from 'react';
import './Boton.css';

const Boton = ({ children, handleClick }) => {
    const isOperator = (val) => {
      return !isNaN(val) ? "" : "operator";
    };

    const esCero = (val) => {
      return val === '0' ? "long-boton" : "";
    }

    return (
      <div
        className={`button ${isOperator(children)} ${esCero(children)}`}
        onClick={() => handleClick(children)}
      >
        {children}
      </div>
    );
  };

export default Boton;