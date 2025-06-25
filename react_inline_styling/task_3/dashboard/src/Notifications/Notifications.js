import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    menuItem: {
       margin: '0px',
       display: 'flex',
       justifyContent: 'end',
       fontWeight: '800',
       padding: '5px',
       margin: '0px 10px 5px 10px',
    },
    Notifications: {
       width: '55vmin',
       position: 'relative',
       border: '1px dashed rgb(225, 29, 63)',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
       justifyContent: 'start',
       fontSize: '1.1rem',
       fontFamily: "'Times New Roman', Times, serif",
       fontWeight: '600',
    },
    button: {
       border: '0px',
       fontSize: '15px',
       position: 'absolute',
       right: '0px',
       marginRight: '3px',
    },
    p: {
       marginBottom: '0px',
    },
    ul: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
    },
   });
   

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
                <p className={css(styles.menuItem)}>Your notifications</p>
                {displayDrawer && (
                    <div className={css(styles.Notifications)}>
                        <button
                            className={css(styles.button)}
                            style={{float: 'right', display: 'inline'}}
                            aria-label='Close'
                            onClick={() => {console.log('Close button has been clicked')}}
                            >x
                        </button>
                        <p className={css(styles.p)}>Here is the list of notifications</p>
                        <ul className={css(styles.ul)}>
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
