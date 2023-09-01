import React from "react";

const FamilyMember = ({ person }) => {
  return (
    <div>
      <h3>Nombre: {person.name}</h3>
      <p>Edad: {person.age}</p>
    </div>
  );
};

export default FamilyMember;
