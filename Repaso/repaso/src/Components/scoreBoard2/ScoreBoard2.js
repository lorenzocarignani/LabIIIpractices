import React, { useRef, useState } from "react";

const ScoreBoard2 = ({ maxScore }) => {
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const [maxPoint, setMaxPoint] = useState(0);
  const invalidPoint = useRef(null);

  const finishPointChange = (event) => {
    setMaxPoint(event.target.value);
  };

  const handlePointsClick = () => {
    const parsedValue = parseInt(maxPoint);
    if (parsedValue >= 18 || parsedValue >= 30) {
      setPuntosEquipoA(0);
      setPuntosEquipoB(0);
      maxScore.current = parsedValue;
    } else {
      invalidPoint.current.textContent = "Valor no valido";
    }
  };
  const addPointsHandler = (team) => {
    if (team === "A") {
      setPuntosEquipoA(puntosEquipoA + 1);
    } else if (team === "B") {
      setPuntosEquipoB(puntosEquipoB + 1);
    }
    if (puntosEquipoA === maxScore.current) {
      alert("¡EL EQUIPO 'A' GANO EL JUEGO!");
      setPuntosEquipoA(0);
      setPuntosEquipoB(0);
      maxScore.current = 0;
    } else if (puntosEquipoB === maxScore.current) {
      alert("¡EL EQUIPO 'B' GANO EL JUEGO!");
      setPuntosEquipoA(0);
      setPuntosEquipoB(0);
      maxScore.current = 0;
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Ingrese el puntaje a jugar"
        value={maxPoint}
        onChange={finishPointChange}
      />
      <button onClick={handlePointsClick}>Aceptar</button>
      <button onClick={() => addPointsHandler("A")}>
        Aumentar puntaje equipo A : {puntosEquipoA}
      </button>
      <button onClick={() => addPointsHandler("B")}>
        Aumentar puntaje equipo B : {puntosEquipoB}
      </button>
      <p ref={invalidPoint} style={{ color: "red" }}></p>
    </div>
  );
};

export default ScoreBoard2;
