import React, { useState } from "react";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const buscarPeliculas = async () => {
    try {
      const apiKey = "08433d67f8ac8ce9ac8262a9b630383e"; // Reemplaza con tu propia API Key de TMDb
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setResultados(data.results);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Ingrese el título de la película"
      />
      <button onClick={buscarPeliculas}>Buscar</button>
      <ul>
        {resultados.map((pelicula) => (
          <li key={pelicula.id}>{pelicula.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;
