import React, { useState } from "react";

const ShopList = () => {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setItem(value);
  };

  const agregarItem = () => {
    if (item.trim() !== "") {
      setLista([...lista, item]);
      setItem("");
    }
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Ingrese un elemento"
      />
      <button onClick={agregarItem}>Agregar</button>
      <ul>
        {lista.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
