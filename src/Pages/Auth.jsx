import { Link } from "react-router-dom";

const Auth = ({ autenticar }) => {
  const onClick = () => {
    autenticar();
  };

  return (
    <div>
      <h2>Inicia Sesión</h2>
      <button
        className="bg-blue-200 px-10 py-2 rounded shadow-lg"
        onClick={onClick}
      >
        Autenticar
      </button>
      <Link to={"/register"}>Registrate</Link>
    </div>
  );
};

export default Auth;
