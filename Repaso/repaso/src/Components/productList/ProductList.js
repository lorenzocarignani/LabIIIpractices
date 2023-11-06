import React from "react";

const ProductList = ({ products, onAddCartHandler }) => {
  return (
    <div>
      <h2>Productos disponibles: </h2>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            <h3>{p.name}</h3>
            <p>Precio: ${p.price}</p>
            <button onClick={() => onAddCartHandler(p)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
