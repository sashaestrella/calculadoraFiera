import './Calculadora.css';
import Boton from '../Boton/Boton';
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import BotonReset from "../BotonReset/BotonReset";
import axios from 'axios';

const Calculadora = () => {
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [datos, setDatos] = useState(null);
  const btnNumbers = ['7','8','9','4','5','6','1','2','3'];
  const operators = ["X", "-", "+"];

  const agregarInput = (val) => {
    const display = (input && (input !== operator) && (input !== previousValue)) ? (input + val) : val;
    setInput(display);
  };

  const limpiar = () => {
    setInput(0);
    setCurrentValue(0);
    setPreviousValue(0);
    setOperator(null);
  };

  const agregarOperador = (val) => {
    const auxOperators = ["+", "X", "%", "-"];
    if (operator && auxOperators.indexOf(val)) {
      setOperator(val);
      setInput(val);
    } else {
      setOperator(val);
      setPreviousValue(input);
      setInput(val);
    }
  };

  const resolver = () => {
    previousValue ? setCurrentValue(input) : setPreviousValue(input);
    postDato(previousValue + operator + input)
  };

  useEffect(() => {
    const evaluate = {
      "+": function (numA, numB) {
        return numA + numB;
      },
      "-": function (numA, numB) {
        return numA - numB;
      },
      "X": function (numA, numB) {
        return numA * numB;
      },
      "%": function (numA, numB) {
        return numA / numB;
      },
    };

    if (operator && currentValue) {
      let solution = evaluate[operator](
        parseFloat(previousValue),
        parseFloat(currentValue)
      );

      setInput(solution);
      setOperator(null);
      setPreviousValue(solution);
      setCurrentValue(null);
    }
  }, [previousValue, operator, currentValue]);

  const callAPI = () => {
    fetch("http://localhost:3000/api/obtenerDatos")
        .then(res => res.text())
        .then(res => setDatos({data: res}));
   }

  const postDato = (dato) => {
    axios.post(`http://localhost:3000/api/agregarDato`, { dato })
        .then(res => {
            console.log(res.data);
            callAPI()
        })
   }

  return (
    <div className="wrapper container">
      <div className="row">
        <Input>{input}</Input>
      </div>
      <div className="row">
        <BotonReset handleClick={limpiar}>C</BotonReset>
        <Boton handleClick={agregarOperador}>%</Boton>
      </div>
      {
          operators.map(op => {
              return(
                    <div className="row">
                        {
                            btnNumbers.splice(0,3).map(num=>{
                                return(
                                    <Boton handleClick={agregarInput}>{num}</Boton>
                                );
                            })
                        }
                        <Boton handleClick={agregarOperador}>{op}</Boton>
                    </div>
              );
          })
      }
      <div className="row">
        <Boton handleClick={agregarInput}>0</Boton>
        <Boton handleClick={resolver}>=</Boton>
      </div>
    </div>
  );
};

export default Calculadora;