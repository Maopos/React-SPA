import { useState } from "react";

const Auth = ({ users, autenticar }) => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const datosIngreso = {
      nombre,
      password,
    };

    if ([nombre, password].includes("")) {
      return;
    }

    const coincidencias = users.filter((i) => i.nombre === datosIngreso.nombre);

    coincidencias.map((i) => {
      if (i.password === datosIngreso.password) {
        autenticar();
      }
    });

    setNombre("");
    setPassword("");
  };

  return (
    <div className="mt-5 md:w-72 bg-blue-50 mx-auto shadow-lg shadow-slate-300">
      <div className="p-5">
        <h2 className="text-xl text-blue-700 text-center mb-5">
          Inicia Sesión
        </h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2"
              placeholder="Tu Nombre"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2"
              placeholder="Password"
            />
          </div>
          <input type="submit" value={"Ingresar"} />
        </form>
      </div>
    </div>
  );
};

export default Auth;
