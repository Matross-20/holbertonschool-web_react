import React, { Component } from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <div className='content-notifications'>
                <div className='menuItem'>Your notifications</div>
                <div className={`Notifications ${displayDrawer ? 'show' : 'hide'}`}>
                    <button onClick={() => { console.log('Close button has been clicked') }}>
                        <img src={close} alt='icon close' />
                    </button>
                    <p>Here is the list of notifications</p>
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