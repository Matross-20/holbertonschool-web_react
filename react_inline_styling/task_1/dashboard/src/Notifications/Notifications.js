import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    contentNotifications:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    menuItem:{
        marginRight: '10px',
    },
    notifications: {
        display: 'none',
        height: '150px',
        width: '400px',
        border: '2px dashed rgb(224, 32, 80)',
        marginRight: '10px',
        paddingLeft: '18px',
        marginTop: '30px',
        fontSize: '18px',
        backgroundColor: '#ffffff',
    },
    show: {
        display: 'block',
    },
    hide: {
        display: 'none',
    },
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    buttonImg: {
        width: '8px',
        position: 'absolute',
        right: '4%',
    },
    paragraph: {
        marginTop: '-4px',
    },
    'li[data-notification-type="default"]':{
        color: 'blue',
    },
    'li[data-notification-type="urgent"]':{
        color: 'var(--red)',
    },
    '.Notifications .notification-item[data-notification-type="urgent"]':{
        color: 'var(--red)',
    },
    '.Notifications .notification-item[data-notification-type="default"]':{
      color: 'blue',
    }
});

class Notifications extends Component {
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render(){
        const { displayDrawer, listNotifications } = this.props;

        return(
            <div className={css(styles.contentNotifications)}>
                <div className={css(styles.menuItem)}>Your notifications</div>
                <div className={css(styles.notifications, displayDrawer ? styles.show : styles.hide)}>
                    <button className={css(styles.button)} onClick={() => { console.log('Close button has been clicked') }}>
                        <img className={css(styles.buttonImg)} src={close} alt='icon close' />
                    </button>
                    <p className={css(styles.paragraph)}>Here is the list of notifications</p>
                    <div>
                        {listNotifications.map(notification => (
                            <NotificationItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value || 'default'}
                                html={notification.html}
                                markAsRead={() => this.markAsRead(notification.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        html: PropTypes.shape({
            __html: PropTypes.string.isRequired,
        }),
        type: PropTypes.string,
        value: PropTypes.string,
    })),
};

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
};

export default Notifications;