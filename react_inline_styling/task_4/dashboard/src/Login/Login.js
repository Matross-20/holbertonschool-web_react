import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    contentLogin: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    buttonLogin : {
        marginTop: '30px',
    },
    smallButtonLogin: {
        padding: '10px 20px',
        border: '3px solid yellow',
        cursor: 'pointer',
    }
})

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.contentLogin)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>

                <label htmlFor="password">Password:</label>
                <input type="password"id="password"/>

                <button className={css(styles.buttonLogin, styles.smallButtonLogin)}>OK</button>
            </div>
        </>
    )
}