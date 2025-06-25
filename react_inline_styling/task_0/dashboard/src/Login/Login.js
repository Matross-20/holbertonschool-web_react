import './Login.css';
import { getFullYear,getFooterCopy } from './utils';

function login() {
  return (
      <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label>Email: </label>
      <input type='email'></input>
      <label>Password: </label>
      <input type='password'></input>
      <button>OK</button>
      </body>
  );
}

export default login;
