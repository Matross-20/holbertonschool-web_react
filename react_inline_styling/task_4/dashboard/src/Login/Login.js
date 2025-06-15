import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <>
      <main className={css(styles.main)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" className={css(styles.blockLabel)}>Email:</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="pwd" className={css(styles.blockLabel)}>Password:</label>
        <input type="password" id="pwd" name="pwd"/>
        <button type='button'>OK</button>
      </main>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: "48px",
    justifyContent: "center",
    '@media (max-width: 900px)': {
      margin: 0,
    },
  },
    blockLabel: {
      '@media (max-width: 900px)': {
      display: "block",
    },
  },
})

export default Login;
