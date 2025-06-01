import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  login: {
    margin: '20px',
  },
});

export default Login;