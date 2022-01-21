import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersLocalStorage = () => {
      const usersLS = JSON.parse(localStorage.getItem("users")) ?? [];
      setUsers(usersLS);
    };
    getUsersLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <Routes>
      {!user && (
        <Route
          path="/auth"
          element={<Auth autenticar={() => setUser(true)} />}
        />
      )}
      {user && (
        <>
          <Route
            path="/profile"
            element={<Profile logout={() => setUser(false)} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}
      <Route
        path="/register"
        element={<Register users={users} setUsers={setUsers} />}
      />
      <Route path="*" element={<Navigate to={user ? "/profile" : "/auth"} />} />
    </Routes>
  );
}

export default App;
