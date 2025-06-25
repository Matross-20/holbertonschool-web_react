import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'

function NotificationItem({ id ,type, html, value, markAsRead = () => {} }) {
    return (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
            <span dangerouslySetInnerHTML={{ __html: html + value }} />
        </li>
    );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default memo(NotificationItem)