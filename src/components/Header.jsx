import { Link } from "react-router-dom";

const Header = ({ logout, user }) => {
  return (
    <div className="bg-blue-50 md:flex">
      <div className="text-center text-blue-600 py-5 font-bold text-3xl md:w-2/3">
        <Link to={"/"}>My Single Page App</Link>
      </div>
      <div className="text-center text-blue-600 md:pt-7 pb-2 text-xl md:w-1/3">
        {user ? (
          <Link className="mr-3" to={"/profile"}>
            Profile
          </Link>
        ) : null}
        {user ? (
          <Link className="mr-3" to={"/dashboard"}>
            Dashboard
          </Link>
        ) : null}
        {user ? <button onClick={logout}>Logout</button> : null}
        {!user ? (
          <Link className="mr-3" to={"/auth"}>
            Ingresa
          </Link>
        ) : null}

        {!user ? <Link to={"/register"}>Registrate</Link> : null}
      </div>
    </div>
  );
};

export default Header;
