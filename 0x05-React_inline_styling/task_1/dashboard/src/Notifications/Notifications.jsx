import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import closeIcon from "../assets/close-button.png";
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '1rem',
  },
  notifications: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderStyle: 'dotted',
    borderColor: '#e1003c',
    padding: '2px',
    fontSize: '12px',
  },
  paragraph: {
    paddingLeft: '1rem',
  },
  closeButton: {
    marginLeft: 'auto',
    backgroundColor: 'white',
    border: 'none',
    height: '25px',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
  },
  notificationList: {
    color: 'red',
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.title)}>Your notifications</div>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <div>
              <p className={css(styles.paragraph)}>Here is the list of notifications</p>
              <ul className={css(styles.notificationList)}>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                      markAsRead={this.markAsRead}
                    />
                  ))
                ) : (
                  <p className={css(styles.paragraph)}>No new notification for now</p>
                )}
              </ul>
            </div>
            <button
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
              className={css(styles.closeButton)}
            >
              <img alt="Close Button" src={closeIcon} className={css(styles.closeIcon)} />
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

export default Notifications;
