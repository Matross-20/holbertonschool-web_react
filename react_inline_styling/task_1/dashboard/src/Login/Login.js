import React from "react";
import { StyleSheet, css } from 'aphrodite';

export default function Login(props) {
    return (
        <>
            <p>{props.text}</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className={css(styles.maringRight)}></input>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className={css(styles.maringRight)}></input>
            <button type='button'>OK</button>
        </>
    );
}

const styles = StyleSheet.create({
    maringRight: {
        marginRight: '1rem'
      },
});
