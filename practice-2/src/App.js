import "./App.css";
import Beers from "./components/beers/Beers";
import Family from "./components/family/Family";
import Login from "./components/login/Login";
import Persons from "./components/persons/Persons";
import Products from "./components/products/Products";
import Table from "./components/table/Table";

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
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];
  return (
    <div className="App">
      <Beers />
      <Products products={products} />
      <Persons names={names} />
      <Family persons={persons} />
      <Table netIncomes={netIncomes} />
      <Login />
    </div>
  );
}

export default App;
