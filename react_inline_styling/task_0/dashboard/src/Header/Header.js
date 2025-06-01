import React from 'react';
import './App.css';
import logo from '../assets/holberton_logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          src={logo}
          // src="./assets/holberton_logo.jpg"
          alt="logo"
        />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default App;