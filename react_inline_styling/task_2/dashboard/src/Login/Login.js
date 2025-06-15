import React, { Component, Fragment } from "react";
import { StyleSheet, css } from 'aphrodite';



class Login extends Component{
    render() {
        return (
            <Fragment>
                <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'></input>
        <button>OK</button>
        </div>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    AppBody: {
        marginTop: "50px",
    }
});

export default Login;