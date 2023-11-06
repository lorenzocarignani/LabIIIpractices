import React, { useState } from "react";
import ProductList from "./components/productList/ProductList";

const products = [
  { name: "Naranja", price: 50 },
  { name: "Manzana", price: 25 },
  { name: "Lima", price: 75 },
  { name: "Frutilla", price: 100 },
];
const AppProduct = () => {
  const [cart, setCart] = useState([]);

  const addHandleCart = (product) => {
    setCart([...cart, product]);
  };

  const showCartHandle = cart.map((c, index) => (
    <li key={c.index} value={c.name}>
      {c.name}
    </li>
  ));
  const showTotalPrice = cart.reduce((n, p) => n + p.price, 0);
  return (
    <div>
      <h1>Lista de productos</h1>
      <p>Cantidad de productos en el carrito: {cart.length}</p>
      <ul>
        <p>Productos agregados</p>
        {showCartHandle}
        Precio total: {showTotalPrice}
      </ul>
      <ProductList products={products} onAddCartHandler={addHandleCart} />
    </div>
  );
};

export default AppProduct;
