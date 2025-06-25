import React from "react";
import './Footer.css';

export default function Footer(props) {
    return (
      <div className="App-footer">
        <p>{props.text}</p>
      </div>
    );
}
