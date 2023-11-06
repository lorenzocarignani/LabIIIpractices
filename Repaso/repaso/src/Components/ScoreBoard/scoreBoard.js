import React from "react";
import { useRef } from "react";
import { useState } from "react";

const ScoreBoard = ({ maxScore }) => {
  const [pointTeamA, setPointTeamA] = useState(0);
  const [pointTeamB, setPointTeamB] = useState(0);
  const [maxPoint, setMaxPoint] = useState("");
  const invalidPoint = useRef(null);

  const finishPointChange = (e) => {
    setMaxPoint(e.target.value);
  };

  const pointsHandler = () => {
    const parsedValue = parseInt(maxPoint);
    if (parsedValue >= 18 && parsedValue <= 30) {
      setPointTeamA(0);
      setPointTeamB(0);
      maxScore.current = parsedValue;
    } else {
      invalidPoint.current.textContent = "Valor no valido ";
    }
  };

  const addPointTeamHandler = (team) => {
    if (team === "A") {
      setPointTeamA(pointTeamA + 1);
    } else {
      setPointTeamB(pointTeamB + 1);
    }
    if (pointTeamA === maxScore.current || pointTeamB === maxScore.current) {
      alert("¡Equipo ganador!");
      setPointTeamA(0);
      setPointTeamB(0);
      maxScore.current(0);
    }
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Numero de finalizacion"
        value={maxPoint}
        onChange={finishPointChange}
      />
      <button onClick={pointsHandler}>Cambiar </button>
      <h2>Equipo A: {pointTeamA}</h2>
      <button onClick={() => addPointTeamHandler("A")}>
        Aumentar puntaje equipo A
      </button>
      <h2>Equipo B: {pointTeamB}</h2>
      <button onClick={() => addPointTeamHandler("B")}>
        Aumentar puntaje equipo B
      </button>
      <p ref={invalidPoint} style={{ color: "red" }}></p>
    </div>
  );
};

export default ScoreBoard;
