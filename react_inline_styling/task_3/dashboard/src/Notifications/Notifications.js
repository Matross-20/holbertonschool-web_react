import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #ccc',
    padding: '10px',
    position: 'relative',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'white',
      zIndex: 1000,
      padding: 0,
      fontSize: '20px',
    },
  },
  menuItem: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'block',
      fontSize: '20px',
    },
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div>
        {!displayDrawer && (
          <div className={css(styles.menuItem)}>
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul className={css(styles.ul)}>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                    markAsRead={() => console.log(`Notification ${notification.id} has been marked as read`)}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
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
