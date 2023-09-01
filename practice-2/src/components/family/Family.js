import React from "react";
import FamilyMember from "./FamilyMember";

const Family = ({ persons }) => {
  const orderFamily = persons.sort((a, b) => {
    return b.age - a.age;
  });
  return (
    <div>
      <h2>Ejercicio adicional 3</h2>
      <h3>Ordena el arreglo y lo mapea teniendo como key el nombre</h3>
      {orderFamily.map((person) => (
        <FamilyMember key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Family;
