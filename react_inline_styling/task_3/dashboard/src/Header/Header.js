import React from "react"
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    header: {
       paddingTop: '10px',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'start',
       color: 'rgb(225, 29, 63)',
       fontSize: '18px',
    },
    logo: {
       height: '20vmin',
       pointerEvents: 'none',
    },
   });
   

export default function Header() {
    return (
        <header className={css(styles.header)}>
            <img src="holberton-logo.jpg" className={css(styles.logo)} alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )
}