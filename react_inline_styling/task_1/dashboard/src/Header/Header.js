import React from "react";
import holbertonLogo from '../assets/holbertonLogo.jpg'
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <div className={css(styles.header)}>
            <img src={holbertonLogo}  alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        width: '95%',
        alignItems: 'center',
        marginInline: 'auto',
    },
    h1: {
        ccolor: 'rgb(204, 44, 44)',
        fontSize: '3rem'
    }
})

export default Header;