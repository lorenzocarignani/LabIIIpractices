import "./App.css";
import Beers from "./components/beers/Beers";
import Family from "./components/family/Family";
import Persons from "./components/persons/Persons";
import Products from "./components/products/Products";

function App() {
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [
    { name: "Juan", age: 26 },
    { name: "Gabriel", age: 27 },
    { name: "Valentina", age: 22 },
    { name: "Paula", age: 25 },
    { name: "Andrés", age: 20 },
  ];
  return (
    <div className="App">
      <Beers />
      <Products products={products} />
      <Persons names={names} />
      <Family persons={persons} />
    </div>
  );
}

export default App;
