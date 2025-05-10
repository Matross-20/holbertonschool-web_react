import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils';

//The function should return a div with the class Notifications
//The div should contain a paragraph with the text Here is the list of notifications
export const Notifications = () => {
    return (
      <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button style={{float:'right', position: "relative", 
          top: '-40px', background: 'transparent', outline: 'none',
          border: 'none'}} aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}>
          <img src={closeIcon} alt="close-icon" width='10px'/>
        </button>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent'  dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
      </div>
    );
  };
  
  export default Notifications;