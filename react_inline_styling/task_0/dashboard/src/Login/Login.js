import React from 'react';
import './Login.css';

function Login() {
  return (
	  <>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"/>
        <label htmlFor="pwd">Password:</label>
        <input type="text" id="pwd" name="pwd"/>
        <button type='button'>OK</button>
      </main>
	  </>
  );
}

export default Login;
