import React from "react";
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <main className={css(styles.applogin)}>
        <div>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" autoComplete="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" autoComplete="current-password" />
          <button className={css(styles.button)}>OK</button>
        </div>
      </main>
    </>
  );
}

const styles = StyleSheet.create({
  applogin: {
    flexDirection: 'column',
    gap: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  button: {
    alignSelf: 'flex-start',
    marginTop: '10px'
  }
});

export default WithLogging(Login);