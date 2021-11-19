import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../context/action-creators";

function Login() {
  // const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.login);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className=" login_wrapper">
        <h1>SIGN IN</h1>
        <form action="" className="form">
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="button"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <p className="error">Something went wrong...</p>}
          <p>DO NOT YOU REMEMBER THE PASSWORD?</p>
          <p>CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
