import React from 'react';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css} from 'aphrodite'

class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayDrawer: props.displayDrawer,
            listNotifications: props.listNotifications
        }
        this.markAsRead = this.markAsRead.bind(this)
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.listNotifications.length !== nextState.listNotifications.length;
      }

    render() {
        if (this.state.listNotifications.length === 0) {
            return (
                <div className={css(styles.NotificationContainer)}>
                    <div className={css(styles.menuItem)}>
                        <p>Your notifications</p>
                    </div>
                    {this.state.displayDrawer && <div className={css(styles.Notifications)}>
                        <p>No new notification for now</p>
                    </div>}
                </div>
            )
        } else {
            return (
                <div className={css(styles.NotificationContainer)}>
                    <div className={css(styles.menuItem)}>
                        <p>Your notifications</p>
                    </div>
                    { this.state.displayDrawer && <div className={css(styles.Notifications)}>
                        <button className={css(styles.buttonStyle)} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} alt='Close'></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul className={css(styles.ulist)}>
                            {this.state.listNotifications.map(notification => <NotificationItem 
                                key={notification.id}
                                idx={notification.id} 
                                type={notification.type} 
                                value={notification.value} 
                                html={notification.__html}
                                markAsRead={this.markAsRead}
                                />)}
                        </ul>
                    </div> }
                </div>
            )
        }
    }
} 

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}
  
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

const styles = StyleSheet.create({
    NotificationContainer: {
        width: "fit-content",
        position: "absolute",
        right: "10px",
        '@media (max-width: 900px)': {
            position: "unset",
            width: "100%",
            fontSize: "20px",
		},
    },
    
    menuItem: {
        width: "fit-content",
        marginLeft: "auto",
    },
    
    Notifications: {
        padding: "1rem",
        border: "2px dotted #e0354b",
        '@media (max-width: 900px)': {
            display: 'block',
            padding: "0"
		},
    },

    buttonStyle: {
        position: 'relative',
        float: 'right',
        backgroundColor: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem'
    },

    ulist: {
        padding: "0",
        listStyle: "none"
    }
})

export default Notifications;