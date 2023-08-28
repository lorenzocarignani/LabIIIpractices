import React from 'react'
import BeerItem from '../beerItem/BeerItem';

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
  return (
    <div>
        {beers.map((beers, index) => <BeerItem key={beers.id} id={beers.id} beerName={beers.beerItem} beerStyle={beers.beerStyle} price={beers.price} />)}
        {beers.filter((beerAvailable) => beerAvailable.available).map(beerAvailable,index) => <BeerItem key={beerAvailable.id} id={beerAvailable.id} beerName={beerAvailable.beerItem} beerStyle={beerAvailable.beerStyle} price={beerAvailable.price} />)

    </div>
  )
}

export default Beers