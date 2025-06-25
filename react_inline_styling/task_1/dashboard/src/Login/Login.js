import { getFullYear,getFooterCopy } from './utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
  }
  })

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
