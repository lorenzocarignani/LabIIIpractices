import React from "react";

const Book = ({ title, rating }) => {
  const isBold = rating > 9;

  return (
    <div>
      <h1>{title}</h1>
      <p style={{ fontWeight: isBold ? "bold" : "normal" }}>
        Puntaje: {rating}
      </p>
    </div>
  );
};

export default Book;
