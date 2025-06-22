import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value, markAsRead }) => {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead();
    }
  };

  return (
    <li data-notification-type={type} onClick={handleClick} dangerouslySetInnerHTML={html ? { __html: html.__html } : null}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  markAsRead: () => {},
};

export default React.memo(NotificationItem);
