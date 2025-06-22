import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    '.content-notifications':{
        position: 'fixed',
        'right': '0',
        'top': '0',
        'display': 'flex',
        'flex-direction': 'column',
    },
    '.menuItem':{
        'margin': '15px 0',
        'margin-right': '20px',
        'text-align': 'right',
    },
    '.Notifications':{
        'background': 'white',
        'display': 'none',
        'width': '500px',
        'border': '3px dashed var(--red)',
        'margin-right': '20px',
        'padding': '20px',
        'padding-left': '40px',
        'position': 'relative',
    },
    '.Notifications.show':{
        'display': 'flex',
        'flex-direction': 'column',
    },
    '.Notifications.hide':{
        'display': 'none',
    },
    '.Notifications button':{
        'position': 'absolute',
        'right': '5px',
        'top': '5px',
        'background': 'none',
        'border': 'none',
        'cursor': 'pointer',
    },
    '.Notifications button img':{
        'width': '25px',
        'height': 'auto',
        'object-fit': 'contain',
    },
    '.Notifications > p':{
        'font-size': '18px',
    },
    '.Notifications > div':{
        'width': '100%',
        'display': 'flex',
        'flex-direction': 'column',
    },
    'li[data-notification-type="default"]':{
        'color': 'blue',
    },
    'li[data-notification-type="urgent"]':{
        'color': 'var(--red)',
    },
    '.Notifications .notification-item[data-notification-type="urgent"]':{
        'color': 'var(--red)',
    },
    '.Notifications .notification-item[data-notification-type="default"]':{
      color: 'blue',
    },
    notificationItem:{
        cursor: 'pointer',
    },
    notificationItemDefault:{
        color: 'blue',
    },
    notificationItemUrgent:{
        color: 'var(--red)',
    },
});

const NotificationItem = ({ id, type = 'default', value, html, markAsRead }) => {
    const handleClick = () => {
        if (markAsRead) {
            markAsRead(id);
        }
    };

    const conditionalStyle = type === 'urgent' ? styles.notificationItemUrgent : styles.notificationItemDefault;
  
    return (
        <li className={`${css(styles.notificationItem)} ${css(conditionalStyle)}`} data-notification-type={type} onClick={handleClick}>
            {html ? (
                <div dangerouslySetInnerHTML={html} />
            ) : (
                <span>{value}</span>
            )}
        </li>
    );
};

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired, 
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    value: '',
    html: null,
    markAsRead: null,
};

export default React.memo(NotificationItem);