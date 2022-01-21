import { Link } from "react-router-dom";

const Profile = ({ logout }) => {
  return (
    <div>
      <Link to={"/dashboard"}>Dashboard</Link>
      <h1>Hola Bienvenido</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
