import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <>
      <header>
        <div className={css(styles.header)}>
          <img className={css(styles.img)} src={holbertonLogo} alt="holberton-logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
      </header>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '60px',
    marginTop: '50px'
  },

  img: {
    width: '150px',
    height: '150px',
    marginTop: '5px'
  },

  h1: {
    color: '#e1003c',
    fontFamily: 'Roboto, sans-serif',
    marginLeft: '5px'
  }
});

export default Header