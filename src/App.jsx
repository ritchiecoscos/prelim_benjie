import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Errorpage from "./pages/Errorpage";
import Edit from "./pages/Edit";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");

  const history = useNavigate();

  const logout = () => {
    setIsLogin(false);
    history("/login");
  };

  return (
    <>
      <div className="d-flex align-item-center nav">
        {isLogin && (
          <Link to="/" className="h2 text-white p-3">
            Home
          </Link>
        )}
        <Link to="/" className="h2 text-white p-3">
          {name}
        </Link>
        {isLogin ? (
          <button className=".button-88" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="h2 text-white">
            Login
          </Link>
        )}
      </div>

      <Routes>
        {isLogin && <Route path="/" element={<Home />} />}
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/logout" element={<Logout setIsLogin={setIsLogin} />} />
        <Route path="/edit" element={<Edit setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  );
}

export default App;
