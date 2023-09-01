import React from "react";

const BeerCount = ({ beers }) => {
  const redCount = beers.filter((beer) => beer.beerStyle === "Red").length;
  const ipaCount = beers.filter((beer) => beer.beerStyle === "IPA").length;
  return (
    <div>
      <h2>Cantidad de cervezas:</h2>
      <p>Red: {redCount}</p>
      <p>Ipa: {ipaCount}</p>
    </div>
  );
};

export default BeerCount;
