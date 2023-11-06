import React from "react";
import Book from "./Components/Books/Book";

const books = [
  { title: "El Quijote de la Mancha", rating: 7.9 },
  { title: "El señor de los anillos", rating: 8.1 },
  { title: "Dune", rating: 7.8 },
  { title: "Martín Fierro", rating: 9.2 },
];

const App = () => {
  const filteredBooks = books.filter((book) => book.rating > 8);

  return (
    <div className="App">
      <h1>Libros con rating mayor a 8</h1>
      {filteredBooks.map((book) => (
        <Book key={book.title} title={book.title} rating={book.rating} />
      ))}
    </div>
  );
};

export default App;
