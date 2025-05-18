import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";
import { NotificationItemShape } from './NotificationItemShape';


function Notifications({ displayDrawer, isLoggedIn, listNotifications }) {
    function handleOnClick() {
        console.log("Close button has been clicked");
    }
	return (
		<>
      <div className="menuItem">Your notifications</div>
      { displayDrawer && isLoggedIn && 
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 && (<NotificationItem value='No new notification for now' type='no-new' />)}
            {listNotifications.map((item) => (<NotificationItem key={item.id} type={item.type} value={item.value} html={item.html} />))}
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
              style={{width: '10px',
              height: '10px'}}/>
          </button>
        </div>
      }
    </>
	);
}

Notifications.defaultProps = {
  displayDrawer: false,
  isLoggedIn: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({ NotificationItemShape }))
};

export default Notifications;
