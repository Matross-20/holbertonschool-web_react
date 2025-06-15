import React from "react";
import { StyleSheet, css} from 'aphrodite'

export default function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}> 
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email"></input>
                <label htmlFor="password" className={css(styles.password)}>Password: </label>
                <input type="password" name="password"></input>
                <button>OK</button>
            </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    appBody: {
        height: "70%",
        padding: "1rem",
        fontSize: "1.2rem",
        fontWeight: "500",
    },
    password: {
        marginLeft: "5px",
    }
})
    