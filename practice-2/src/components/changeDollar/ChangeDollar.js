import React from 'react'

const ChangeDollar = ({valueDollar, onChangeDolarHandler}) => {
    const ChangeDollarHandler = (event) => {
        onChangeDolarHandler(event.target.value);
    }
  return (
    <div>
        <label>Nuevo precio del dolar</label>
        <input type="number"
        onChange={ChangeDollarHandler}/>
    </div>
  )
}

export default ChangeDollar