import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 900px)': {
      width: '400px',
      margin: '0 auto',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    width: '100%',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    '@media (min-width: 900px)': {
      width: 'auto',
    },
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
});

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)}>Email: </label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password: </label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
