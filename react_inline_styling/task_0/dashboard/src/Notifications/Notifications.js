import React from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

class Notifications extends React.Component {

    static propTypes = {
        displayDrawer: PropTypes.bool
    }

    static defaultProps = {
        displayDrawer: false
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { displayDrawer, listNotifications = [] } = this.props;

        return (
            <div className='menuItem'>
                <p>Your notifications</p>
                {displayDrawer && (
                    <div className='Notifications'>
                        <button
                            style={{float: 'right', display: 'inline'}}
                            aria-label='Close'
                            onClick={() => {console.log('Close button has been clicked')}}
                            >x
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.length > 0 ? listNotifications.map((noti, index) => {
                                return (
                                    <NotificationItem 
                                        key={noti.id}
                                        id={index}
                                        type={noti.type}
                                        html={noti.html}
                                        value={noti.value}
                                        markAsRead={this.markAsRead}
                                    />
                                )
                            }) : (
                                < NotificationItem key="no-new-notification" html={""} value='No new notification for now'/>
                            )}
                        </ul>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Notifications;



Notification.propTypes = {
    displayDrawer: PropTypes.bool
}

Notification.defaultProps = {
    displayDrawer: false
}
