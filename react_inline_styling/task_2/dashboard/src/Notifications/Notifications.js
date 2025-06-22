import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #ccc',
    padding: '10px',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.notifications)}>
        {displayDrawer && (
          <div className="menuItem">
            Your notifications
          </div>
        )}
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul className={css(styles.list)}>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  html={notification.html}
                  value={notification.value}
                  markAsRead={() => console.log(`Notification ${notification.id} has been marked as read`)}
                  className={css(notification.type === 'default' ? styles.default : styles.urgent)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Notifications;
