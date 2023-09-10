import React, { useState } from "react";
import BeerItem from "../beerItem/BeerItem";
import "../beers/Beers.css";
import BeerCount from "../beerCount/BeerCount";
import StyleBeer from "../styleBeer/StyleBeer";
import ChangeDollar from "../changeDollar/ChangeDollar";
import NewBeer from "../newBeer/NewBeer";

const Beers = () => {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  const availableBeers = beers.filter((beer) => beer.available);
  const [dollar, setDollar] = useState("");
  const [showDollar, setShowDollar] = useState(false);

  const ChangeDollarHandler = (value) => {
    setDollar(value);
  };

  return (
    <div>
      <button onClick={() => setShowDollar(!showDollar)}>
        {showDollar
          ? "Ocultar cotizador del dolar"
          : "Mostrar cotizador de dolar"}
      </button>
      {showDollar && (
        <ChangeDollar
          valueDollar={dollar}
          onChangeDolarHandler={ChangeDollarHandler}
        />
      )}
      <NewBeer />
      {beers.map((beers, index) => (
        <BeerItem
          key={beers.id}
          id={beers.id}
          beerName={beers.beerName}
          beerStyle={beers.beerStyle}
          price={beers.price}
          dollar={dollar}
        />
      ))}
      <br />
      <h2>Cervezas disponibles</h2>
      {availableBeers.map((beers) => (
        <li key={beers.id}>{beers.beerName}</li>
      ))}
      <BeerCount beers={beers} />
      <StyleBeer beers={beers} />
    </div>
  );
};

export default Beers;
