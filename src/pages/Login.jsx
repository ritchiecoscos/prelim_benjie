import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    history("/");
  };

  return (
    <>
      <div className="container mt-5 w-25 shadow-lg p-3 mb-5 bg-white rounded ">
        <form>
          <h1 className="text-center">Login</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="input-group"
              placeholder="admin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="input-group"
              placeholder="admin"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-sm bg-success text-white w-100"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
