import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        height: '65vh',
        padding: '0.5rem',
        flexDirection: 'column',
    },
});

const Login = () => {
    return (
        <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button>OK</button>
            </div>
        </div>
    );
};

export default Login;