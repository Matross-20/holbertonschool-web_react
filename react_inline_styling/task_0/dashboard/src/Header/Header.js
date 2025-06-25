import React from "react";
import holbertonLogo from '../assets/holbertonLogo.jpg'
import './Header.css'

function Header() {
    return (
        <div className="App-header">
            <img src={holbertonLogo}  alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;