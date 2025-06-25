import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeImage from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notificationsList.length !== this.props.notificationsList.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notificationsList, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            {notificationsList.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  onClick={() => console.log("Close button has been clicked")}
                  className={css(styles.closeButton)}
                >
                  <img
                    src={closeImage}
                    alt="Close icon"
                    className={css(styles.closeIcon)}
                  />
                </button>
                <ul className={css(styles.list)}>
                  {notificationsList.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                      markAsRead={this.markAsRead.bind(this, notif.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
  },
  notifications: {
    border: "2px dashed #e0354b",
    padding: "1rem",
    position: "absolute",
    right: "1rem",
    top: "2rem",
    backgroundColor: "white",
    zIndex: 1,
    width: "30%",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  closeIcon: {
    width: "10px",
    height: "10px",
  },
  list: {
    paddingLeft: "1rem",
  },
});

Notifications.propTypes = {
  notificationsList: PropTypes.arrayOf(PropTypes.object),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notificationsList: [],
  displayDrawer: true,
};

export default Notifications;