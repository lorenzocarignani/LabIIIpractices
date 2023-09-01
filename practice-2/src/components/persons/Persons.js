import React from "react";
import Person from "./Person";

const Persons = ({ names }) => {
  const filterNames = names.filter(
    (name) => name.charAt(0).toLowerCase() === "p"
  );
  return (
    <div>
      <h2>Ejercicio adicional 2</h2>
      <h3>Filtra por la letra P</h3>
      {filterNames.map((name, index) => (
        <Person key={index} name={name} />
      ))}
    </div>
  );
};

export default Persons;
