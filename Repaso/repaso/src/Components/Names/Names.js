import React from "react";

const Names = () => {
  let input = [
    { name: "Jhon", age: "21", city: " New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
  ];

  const returnNames = (inputValue) => inputValue.map((item) => item.name);

  return <div>Names</div>;
};

export default Names;
