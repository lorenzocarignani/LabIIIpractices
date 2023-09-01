import React from "react";

const StyleBeer = ({ beers }) => {
  const styles = beers.map((beer) => beer.beerStyle);
  const uniqueStyles = [...new Set(styles)];
  return (
    <div>
      <h2>Todos los estilos de cervezas:</h2>
      {uniqueStyles.map((style) => (
        <li key={style}>{style}</li>
      ))}
    </div>
  );
};

export default StyleBeer;
