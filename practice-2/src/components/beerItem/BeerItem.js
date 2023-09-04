import React from "react";

const BeerItem = ({ id, beerName, beerStyle, price, available , dollar }) => {
  const changeAvailable = () =>{
    
  }
  return (
    <div>
      <h2>Nombre: {beerName}</h2>
      <h2>Estilo: {beerStyle}</h2>
      <h2>Precio: {price * dollar}</h2>
      <h2>Disponible: {available ? "Si" : "No"}</h2>
      <button onClick={changeAvailable}>Cambiar disponibilidad</button>
      <br />
    </div>
  );
};

export default BeerItem;
