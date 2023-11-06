import React, { useState, useRef } from "react";

const TablaPuntos = ({ maxScore }) => {
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const inputInvalidoRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckScore = () => {
    const valorParseado = parseInt(inputValue);
    if (valorParseado >= 18 && valorParseado <= 30) {
      setPuntosEquipoA(0);
      setPuntosEquipoB(0);
      maxScore.current = valorParseado;
    } else {
      inputInvalidoRef.current.textContent =
        "Valor no valido. Introduce un valor entre 18 y 30";
    }
  };

  const handleAumentarPuntaje = (equipo) => {
    if (equipo === "A") {
      setPuntosEquipoA(puntosEquipoA + 1);
    } else if (equipo === "B") {
      setPuntosEquipoB(puntosEquipoB + 1);
    }
    if (
      puntosEquipoA === maxScore.current ||
      puntosEquipoB === maxScore.current
    ) {
      alert("¡Equipo ganador!");
      setPuntosEquipoA(0);
      setPuntosEquipoB(0);
      maxScore.current = 0;
    }
  };

  return (
    <div>
      <h1>Tabla de puntos</h1>
      <p>Puntaje maximo: {maxScore.current}</p>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleCheckScore}>Aceptar Puntaje</button>
      <div>
        <button onClick={() => handleAumentarPuntaje("A")}>
          Aumentar puntaje equipo A
        </button>
        <button onClick={() => handleAumentarPuntaje("B")}>
          Aumentar puntaje equipo B
        </button>
      </div>
      <p>Equipo A: {puntosEquipoA}</p>
      <p>Equipo B: {puntosEquipoB}</p>
      <p ref={inputInvalidoRef} style={{ color: "red" }}></p>
    </div>
  );
};

export default TablaPuntos;
