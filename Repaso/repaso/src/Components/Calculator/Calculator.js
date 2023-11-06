import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [suma, setSuma] = useState("");

  const handleNum1Change = (event) => {
    const { value } = event.target;
    setNum1(value);
  };

  const handleNum2Change = (event) => {
    const { value } = event.target;
    setNum2(value);
  };

  const handleSumar = () => {
    const resultado = parseFloat(num1) + parseFloat(num2);
    setSuma(resultado);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Número 2"
      />
      <button onClick={handleSumar}>Sumar</button>
      {suma && <h1>La suma es: {suma}</h1>}
    </div>
  );
};

export default Calculator;
