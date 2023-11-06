import React, { useState } from "react";

const ContadorClics = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador de Clics</h1>
      <p>Número de clics: {contador}</p>
      <button onClick={incrementarContador}>Clic aquí</button>
    </div>
  );
};

export default ContadorClics;
