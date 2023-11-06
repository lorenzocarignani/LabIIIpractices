import React, { useState, useRef } from "react";

function Scoreboard({ maxScore }) {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const invalidInputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckScore = () => {
    const parsedValue = parseInt(inputValue);

    if (parsedValue >= 18 && parsedValue <= 30) {
      setScoreTeamA(0);
      setScoreTeamB(0);
      maxScore.current = parsedValue;
    } else {
      invalidInputRef.current.textContent =
        "Valor no válido. Introduce un valor entre 18 y 30.";
    }
  };

  const handleIncrementScore = (team) => {
    if (team === "A") {
      setScoreTeamA(scoreTeamA + 1);
    } else if (team === "B") {
      setScoreTeamB(scoreTeamB + 1);
    }

    if (scoreTeamA === maxScore.current || scoreTeamB === maxScore.current) {
      alert("¡Equipo ganador!");
      setScoreTeamA(0);
      setScoreTeamB(0);
      maxScore.current = 0;
    }
  };

  return (
    <div>
      <h1>Scoreboard</h1>
      <p>Puntaje máximo: {maxScore.current}</p>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleCheckScore}>Comprobar Puntaje</button>
      <div>
        <button onClick={() => handleIncrementScore("A")}>
          Aumentar Puntaje Equipo A
        </button>
        <button onClick={() => handleIncrementScore("B")}>
          Aumentar Puntaje Equipo B
        </button>
      </div>
      <p>Equipo A: {scoreTeamA}</p>
      <p>Equipo B: {scoreTeamB}</p>
      <p ref={invalidInputRef} style={{ color: "red" }}></p>
    </div>
  );
}

export default Scoreboard;
