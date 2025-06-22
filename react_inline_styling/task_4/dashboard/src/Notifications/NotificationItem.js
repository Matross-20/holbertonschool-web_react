import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: '10px 8px',
    fontSize: '20px',
    borderBottom: '1px solid black',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, value, html }) => {
  const styleType = type === 'urgent' ? styles.urgent : styles.default;

  return (
    <li
      className={css(styles.item, styleType)}
      dangerouslySetInnerHTML={html ? { __html: html.__html } : null}
    >
      {!html ? value : null}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;
