import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, value }) => {
  return (
    <li className={css(type === 'urgent' ? styles.urgent : styles.default)}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
