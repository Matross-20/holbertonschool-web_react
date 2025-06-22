import React from 'react'

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <div className="form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password"/>

                <button type='submir'>OK</button>
            </div>
        </>
    )
}