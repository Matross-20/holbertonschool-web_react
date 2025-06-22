import React from 'react';
import Logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    appHeaderImg: {
        width: 'auto',
        height: '200px',
    },
    appHeaderH1: {
        fontSize: '40px',
        color: 'var(--red)',
    },
    smallHeaderTitle: {
        '@media (max-width: 900px)':{
            fontSize: '25px'
        }
    },
    smallImage: {
        '@media (max-width: 900px)':{
            width: '120px',
            height: 'auto',
            'object-fit': 'cover',
        }
    },
})

export default function Header(){
    return (
        <>
            <div className={css(styles.appHeader, styles.smallContentHeader)}>
                <img className={css(styles.appHeaderImg, styles.smallImage)} src={Logo} alt='holberton logo' />
                <h1 className={css(styles.appHeaderH1, styles.smallHeaderTitle)}>School dashboard</h1>
            </div>
        </>
    )
}