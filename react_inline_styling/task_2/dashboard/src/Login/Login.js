import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  loginContainer: {
    margin: '20px auto',
    width: '300px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  inputGroup: {
    margin: '10px 0',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  smallInput: {
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    width: 'calc(100% - 20px)',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3BACB1',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#1E7A7A',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <div className={css(styles.inputGroup)}>
        <label className={css(styles.label)} htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(styles.smallInput)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label className={css(styles.label)} htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(styles.smallInput)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
