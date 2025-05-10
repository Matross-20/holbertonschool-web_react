import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js';
import close from "./close-icon.png";

function Notifications() {
    const strElement = getLatestNotification();
    function handleOnClick() {
        console.log("Close button has been clicked");
    }
	return (
		<div className="Notifications">
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: strElement}} />
			</ul>
			<button
				style={{
                    border: 'none',
					float: 'right',
					position: 'relative',
					right: 0,
					top: -120,
					backgroundColor: 'white',
                    textAlign: 'right'
				}}
				aria-label={'Close'}
                onClick={handleOnClick}
			>
				<img src={close} alt="close"
                    style={{width: '2%',
                    height: '2%'}}/>
			</button>
		</div>
	);
}

export default Notifications;
