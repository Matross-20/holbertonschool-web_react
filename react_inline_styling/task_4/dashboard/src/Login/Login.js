import React from "react";
import { StyleSheet, css} from 'aphrodite'

export default function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}> 
                <p>Login to access the full dashboard</p>
                <div className={css(styles.seperator)}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className={css(styles.seperator)}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"></input>
                </div>
                <div className={css(styles.seperator)}>
                    <button>OK</button>
                </div>
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
        '@media (max-width: 900px)': {
            flexDirection: "row"
        }
    },
    seperator: {
        display: 'inline',
		'@media (max-width: 900px)': {
			display: 'block',
		},
    }
})
    