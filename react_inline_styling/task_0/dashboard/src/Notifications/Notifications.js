import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.listNotifications.length < nextProps.listNotifications.length) return true;
    return false;
  }

  render() {
    const buttonStyle = {
      background: 'transparent',
      border: 'none',
      position: "absolute",
      top: 2,
      right: 2
    }
    let content;
  
    if (this.props.listNotifications.length === 0) content = <p>No new notification for now</p>;
    else {
      content = this.props.listNotifications.map((notification) =>
      <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id}/>);
    }
    return (
      <>
        <div className='menuItem'>
          Your notifications
        </div>
        {this.props.displayDrawer ? (
          <div className='Notifications'>
            {this.props.listNotifications.length === 0 ? content : (<p>Here is the list of notifications</p>)}
            <button aria-label='Close' onClick={() => console.log('Close button has been clicked')} style={buttonStyle}>
              <img src={closeIcon} alt='Close icon' width={10}/>
            </button>
            {this.props.listNotifications.length === 0 ? null : (<ul>{content}</ul>)}
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
