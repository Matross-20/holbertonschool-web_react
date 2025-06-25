import React from "react";
import './Login.css';

export default function Login(props) {
    return (
        <>
            <p>{props.text}</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"></input>
            <button type='button'>OK</button>
        </>
    );
}
