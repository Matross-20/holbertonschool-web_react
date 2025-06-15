import React from 'react'
import PropTypes from 'prop-types'


function NotificationItem({ type, html, value, markAsRead, id }) {
  return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}>{value}</li>
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

export default NotificationItem;
