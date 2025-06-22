import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "../Notifications/NotificationItem.jsx";
import { StyleSheet, css } from 'aphrodite';
import closeButton from "../assets/close-button.png";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    // Only update when the notifications array length changes or displayDrawer changes
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.notificationtTitle, styles.notiGeneral)}>Your Notifications</div>
        <div className={css(styles.notiGeneral)}>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeButton} alt="close button icon" className={css(styles.img)} />
            </button>
            <p className={css(styles.p)}>
              {notifications.length > 0
                ? "Here is the list of notifications"
                : "No new notification for now"}
            </p>
            {notifications.length > 0 && (
              <ul className={css(styles.ul)}>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    className={css(
                      notification.type === 'urgent'
                        ? styles.urgentNotification
                        : styles.defaultNotification
                    )}
                  />
                ))}
              </ul>
            )}
          </div>
          )}
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  notificationtTitle: {
    fontWeight: 'bold',
    marginBottom: '10px'
  },

  notifications: {
    display: 'block',
    width: '300px',
    height: '100px',
    border: '3px dashed #e14852',
    paddingBottom: '20px'
  },

  notiGeneral: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  ul: {
    paddingLeft: 30,
    listStyle: 'none'
  },
  
  p: {
    marginLeft: '10px'
  },

  button: {
    position: 'absolute',
    right: '30px',
    top: '55px',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
  
  img: {
    width: '20px',
    height: '20px',
    marginBottom: '10px'
  },

  defaultNotification: {
    color: 'blue'
  },

  urgentNotification: {
    color: 'red'
  }
});

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  displayDrawer: PropTypes.bool,
};

export default Notifications;
