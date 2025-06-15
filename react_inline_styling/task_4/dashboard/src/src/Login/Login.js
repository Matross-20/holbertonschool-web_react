import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
	  <>
      <main className={css(styles.main)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"/>
        <button type='button'>OK</button>
      </main>
	  </>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: "48px"
  }
})

export default Login;
