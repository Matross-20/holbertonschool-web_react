import React from 'react';
import Logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    '.App-header':{
        'width': '100%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'left',
        'border-bottom': '3px solid var(--red)',
    },
    '.App-header_logo':{
        'width': 'auto',
        'height': '200px',
    },
    appHeader:{
        display: 'flex',
        alignItems: 'center',
    },
    appHeaderImg:{
        width: 'auto',
        height: '200px',
    },
    appHeaderH1:{
        fontSize: '35px',
        color: 'var(--red)',
    }
})

export default function Header() {
    return (
        <>
            <div className={css(styles.appHeader)}>
                <img className={css(styles.appHeaderImg)} src={Logo} alt='holberton-logo' />
                <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
            </div>
        </>
  )
}