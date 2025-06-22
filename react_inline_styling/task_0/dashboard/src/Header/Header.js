import React from 'react'
import logo from '../assets/holberton-logo.jpg'
import './Header.css'

export default function Header() {
    return (
        <div className='App-header'>
            <img className='App-header_logo' src={logo} alt="logo-holberton"/>
            <h1>School dashboard</h1>
        </div>
    )
}