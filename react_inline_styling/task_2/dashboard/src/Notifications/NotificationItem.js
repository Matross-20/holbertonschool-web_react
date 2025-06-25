import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    defaultNotification: {
       color: 'rgb(9, 9, 182)',
    },
    urgentNotification: {
       color: 'rgb(240, 86, 112)',
    },
    strongClass: {
       color: 'rgb(255, 0, 43)',
       fontWeight: '900',
    },
   });
   

function NotificationItem({ id ,type, html, value, markAsRead = () => {} }) {
    return (
        <li 
           data-notification-type={type} 
           onClick={() => markAsRead(id)}
           className={type === 'default' ? css(styles.defaultNotification) : css(styles.urgentNotification)}
        >
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