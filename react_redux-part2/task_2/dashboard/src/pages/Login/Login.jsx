import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/authSlice";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const dispatch = useDispatch();

  const { email, password, isValid, handleChange, handleSubmit } = useLogin({
    onLogin: (user) => dispatch(login(user)),
  });

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;