import React, { useEffect, useState } from "react";

function App() {
  //Creacion de los useStates de tasks = con valor de arreglo vacio y error = valor null
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [taskTitle, setTitle] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://647b8d74d2e5b6101db16ce5.mockapi.io/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setTitle("");
        } else {
          throw new Error("Error al crear la tarea");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Hace la request a la direccion de la api y trae la info con el metodo GET
  useEffect(() => {
    fetch("https://647b8d74d2e5b6101db16ce5.mockapi.io/api/tasks", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error en la llamada a la API");
      })
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Prueba de API</h1>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskTitle}
            onChange={handleInputChange}
            placeholder="Titulo"
          />
          <button type="submit">Agregar tarea</button>
        </form>
        {error && <div>Error:{error}</div>}
        {success && <div>Tarea creada exitosamente.</div>}
      </div>
    </div>
  );
}

export default App;
