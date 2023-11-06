import React, { useState, useEffect } from "react";

const CountTime = () => {
  const tiempoInicial = 5 * 60; // 5 minutos en segundos
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (corriendo && tiempoRestante > 0) {
      intervalo = setInterval(() => {
        setTiempoRestante((prevTiempo) => prevTiempo - 1);
      }, 1000);
    } else if (!corriendo && tiempoRestante !== tiempoInicial) {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [corriendo, tiempoRestante, tiempoInicial]);

  const iniciarContador = () => {
    setCorriendo(true);
  };

  const pausarContador = () => {
    setCorriendo(false);
  };

  const reiniciarContador = () => {
    setTiempoRestante(tiempoInicial);
    setCorriendo(false);
  };

  const formatTime = (tiempo) => {
    const minutes = Math.floor(tiempo / 60);
    const seconds = tiempo % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Contador de Tiempo</h1>
      <div>{formatTime(tiempoRestante)}</div>
      <button onClick={iniciarContador}>Inicio</button>
      <button onClick={pausarContador}>Pausa</button>
      <button onClick={reiniciarContador}>Reinicio</button>
    </div>
  );
};

export default CountTime;
