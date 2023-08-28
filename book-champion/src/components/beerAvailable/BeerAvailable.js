import React from 'react'

const BeerAvailable = ({available}) => {

  return (
    <div>
      <h2>Cervezas disponibles</h2>
        {beers.filter((beerAvailable) => beerAvailable.available === true)}
    </div>
  )
}

export default BeerAvailable