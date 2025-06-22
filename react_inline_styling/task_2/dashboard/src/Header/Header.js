import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from './holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3BACB1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px 0',
    borderBottom: '3px solid #3BACB1',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#f70d0d',
    marginLeft: '10px',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

export default Header;
