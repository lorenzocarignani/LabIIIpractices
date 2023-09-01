import React from "react";

const BeerItem = ({ id, beerName, beerStyle, price, available }) => {
  const dolar = 735;
  return (
    <div>
      <h2>Nombre: {beerName}</h2>
      <h2>Estilo: {beerStyle}</h2>
      <h2>Precio: {price * dolar}</h2>
      <h2>Disponible: {available ? "Si" : "No"}</h2>
      <br />
    </div>
  );
};

export default BeerItem;
