import React from 'react';
import './Login.css';

function Login() {
	return (
    <div className="Login-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:&nbsp;
        <input type="email"></input>
      </label>
      <label htmlFor="password">&nbsp;Password:&nbsp;
        <input type="password"></input>
      </label>
      &nbsp;
      <button>OK</button>
    </div>
	);
}

export default Login;
