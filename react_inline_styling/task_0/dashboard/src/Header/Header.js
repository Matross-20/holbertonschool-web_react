import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header className="App-header">
            <img src={props.src} alt={props.alt} />
            <h1>{props.text}</h1>
        </header>
    );
}
