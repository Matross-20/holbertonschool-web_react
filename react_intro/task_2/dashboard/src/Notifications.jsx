import React from 'react';
import './Notifications.css';
import closeIcon from "./assets/close-button.png";
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className="notifications"><div>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
      <button alt="Close Button" onClick={() => { console.log("Close button has been clicked") }} style={{ marginLeft: "auto", backgroundColor: "white", border: "none", height: "25px" }} aria-label="Close">
        <img src={closeIcon}></img>
      </button>

    </div>
  )
}
