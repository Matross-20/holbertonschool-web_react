import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value, markAsRead, id }) {
  return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead} className={type === "urgent" ? css(styles.urgent, styles.respScreen) : css(styles.default, styles.respScreen) }>{value}</li>
};

NotificationItem.prototype = {
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
  id: PropTypes.number
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: NaN
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
  respScreen: {
    width: "100%",
    borderBottom: "2px solid black",
    fontSize: "20px",
    padding: "10px 8px",
  },
});

export default NotificationItem;
