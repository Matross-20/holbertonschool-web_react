import React from "react";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
    return (
        <header className={css(styles.AppHeader)}>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className={css(styles.heading)}>School dashboard</h1>
      </header>
    );
}

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    color: "red",
  },
  heading: {
    margin: "auto auto auto 0",
    color: "red",
  }
});

export default Header;