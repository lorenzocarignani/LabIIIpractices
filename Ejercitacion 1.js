// 1. Crear un arreglo de nombres a partir del siguiente input:
// let input = [
// { name: "John", age: 21, city: "New York" },
// { name: "Mike", age: 28, city: "Moscow" },
// { name: "Danny", age: 30, city: "London" },
// { name: "Lisa", age: 26, city: "Paris" },
// { name: "Sophie", age: 19, city: "Berlin" },
// ];

let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

let names = input.map((item) => item.name);

console.log(names);

// 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
// personas mayores de 20 años y menores de 29.

let ageNames = input
  .filter((mayores) => mayores.age > 20 && mayores.age < 29)
  .map((item) => item.name);

console.log(ageNames);

// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

let countries = [
  { name: "Italia", population: 591100000 },
  { name: "Argentina", population: 458100000 },
  { name: "España", population: 474200000 },
  { name: "Francia", population: 677500000 },
];

let orderByPopulation = countries.sort((a, b) => a.population - b.population);

console.log(orderByPopulation);

// 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
// torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
// velas más altas de la torta
// Tu objetivo es contar cuántas son las más altas de la torta
// Ejemplo candles = [4, 4, 1, 3]
// Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
// debe retornar 2 como valor.

const candles = [4, 4, 1, 3, 10, 10, 10, 10, 10];
const maxHeight = Math.max(...candles);

const birthdayCandles = (inputValue) =>
  inputValue.filter((candle) => candle == maxHeight).length;

console.log(birthdayCandles(candles));

// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
// falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
// de estudiantes están presentes cuando la clase empieza.
// Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
// que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
// profesor de la clase, determinar si la clase se cancela o no.
// Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
// CANCELA.

const assist = 5;
const alumns = [-1, 3, 2, 3, -10, -3, -2, 1, 3];

const professorClass = (currentAlumns, assist) =>
  currentAlumns.filter((attendee) => attendee <= 0).length <= assist
    ? "NO"
    : "YES";

console.log(professorClass(alumns, assist));

// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:

const objectComputer = {
  ram: 16,
  motherboard: "ASUS ROG Strix B550-F Gaming",
  proccesor: "AMD Ryzen 7 5800X",
  gpu: "RTX 2060 8gb",
};
console.log(objectComputer);

const toArray = (objectVar) => Object.entries(objectVar);
console.log(toArray(objectComputer));
