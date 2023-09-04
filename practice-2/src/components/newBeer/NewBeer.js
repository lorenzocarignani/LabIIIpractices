import React, { useState } from 'react'

const NewBeer = ({addBeer}) => {
    const [beerData, setBeerData] = useState({
    beerName : '',
    beerStyle : '',
    price : '',
    available : 'true',})

    const handleInputChange = (e) => {
        
    }

    const handleSubmit = () => {
        setBeerData(beerData)
    }


  return (
    <div>
        <form>
            <label>Crear una nueva cerveza</label>
            <input type="text" name='beerName' placeholder='Nombre de la cerveza' value={beerData.beerName} />
            <label>Estilo de la cerveza</label>
            <input type="text" name='beerStyle' placeholder='Estilo de la cerveza' value={beerData.beerStyle}/>
            <label>Precio de la cerveza</label>
            <input type="text" name='price' placeholder='Precio de la cerveza' value={beerData.price}/>
            <button onSubmit={handleSubmit}>
                Crear
            </button>
        </form>
    </div>
  )
}

export default NewBeer