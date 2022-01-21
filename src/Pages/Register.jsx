import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ users, setUsers }) => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if ([nombre, password].includes("")) {
      return;
    }

    const newUser = {
      nombre,
      password,
    };

    setUsers([...users, newUser]);

    setNombre("");
    setPassword("");
  };
  return (
    <div>
      <h1>Registrate</h1>
      <form onSubmit={onSubmit}>
        <div className="bg-slate-300 p-5 ">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-36 ml-3 rounded"
          />
        </div>
        <div className="bg-slate-300 p-5 ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-36 ml-3 rounded"
          />
        </div>
        <input
          type="submit"
          value={"Registro"}
          className="bg-blue-200 px-10 py-2 my-5 rounded cursor-pointer"
        />
      </form>
      <Link to={"/auth"} className="bg-slate-500 text-white px-10 py-2 rounded">
        Inicia sesion
      </Link>
    </div>
  );
};

export default Register;
