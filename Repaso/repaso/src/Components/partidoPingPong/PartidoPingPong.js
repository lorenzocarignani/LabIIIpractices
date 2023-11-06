import React from "react";

const PartidoPingPong = ({ maxPuntos }) => {
  return (
    <div>
      <h1>Partido PING PONG</h1>
      <h2>Puntos a jugar: {maxPuntos.current}</h2>
      <input
        type="number"
        placeholder="Puntos a jugar"
        value={{ maxPuntos }}
        onClick={pointsHandler}
      />
    </div>
  );
};

export default PartidoPingPong;
