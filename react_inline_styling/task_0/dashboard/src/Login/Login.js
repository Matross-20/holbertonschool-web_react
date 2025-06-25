import React from "react"
import './Login.css'

export default function Login() {
    return (
        <div className="login">
            <p>Login to access the full dashboard</p>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id='email' name="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' name="password"></input>
                <button>OK</button>
            </div>
        </div>
    )
}
