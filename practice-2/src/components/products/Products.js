import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div>
      <h2>Ejercicio adicional 1</h2>
      <h3>Muestra el arreglo</h3>
      {products.map((prod, index) => (
        <Product key={index} name={prod} />
      ))}
    </div>
  );
};

export default Products;
