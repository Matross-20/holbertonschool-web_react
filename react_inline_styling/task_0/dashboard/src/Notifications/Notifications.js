import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


class Notifications extends React.Component {
 
  constructor(props) {
      super(props)
      this.state = {
          html: PropTypes.string,
          value: PropTypes.string,
          type: PropTypes.string.isRequired
      }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
}

shouldComponentUpdate(nextProps) {
  if (nextProps.listNotifications.length === this.props.listNotifications.length) {
      return false
  }
  return true
}


  render() {
    return (
      <><div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
              <div className="Notifications">
              <p>Here is the list of notifications</p>
              <button aria-label='Close' onClick={buttonclc()} style={btncs}>
                <img src='close-icon'></img>
              </button>
              <li markAsRead={this.markAsRead} onClick="markAsRead()"></li>
              <ul>
              {listCourses ? (
                  <tr>No new notification for now</tr>
                ) : (
                  listNotifications.map(listNotification => (
                      <NotificationItem type={listNotification.type} value={listNotification.value} dangerouslySetInnerHTML={listNotification.__html}/>
                ))
                )}
              </ul>
            </div>
      ) : (
        <Login />
      )}
</>
    );
  }
}

  function buttonclc(){
    console.log("Close button has been clicked");
}
const btncs = {
    position: 'fixed',
    float: 'right',
    background: 'transparent',
	  color: 'white',
    top: '10px',
    right: '10px',
    height: '17px'
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
}
Notifications.defaultProps = {
  displayDrawer: false,
}
export default Notifications;
