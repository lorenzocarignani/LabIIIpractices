import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUser(inputValue);
  };

  const loginEmpty = user.trim() === "";
  const banO = user.includes("O") || user.includes("o");

  const handleSubmit = () => {
    if (loginEmpty || banO) {
      return alert("Usuario inválido para registrarse");
    } else {
      return alert("Usuario registrado correctamente");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Usuario"
        onChange={handleInputChange}
        value={user}
      />
      <button onClick={handleSubmit}>Registrarse</button>
      <p>
        {loginEmpty ? "No contiene caracteres" : ""}
        {banO ? "Por favor, ¡Nombres de usuario sin la letra o!" : ""}
      </p>
    </div>
  );
};

export default Login;
