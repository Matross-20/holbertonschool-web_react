import React, { Component } from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite';


class Notifications extends Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`${id}`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render () {
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <button
               type='button'
               style={{ display: 'inline', position: 'absolute', right: '0.8rem', top: '2.2rem' }}
               aria-label='Close'
               onClick={() => console.log('Close button has been clicked')}
            >
              <img src={icon} alt="" style={{ width: '4px' }} />
            </button>
            <ul className={css(styles.listStyle)}>
              { this.props.listNotifications
                  ? this.props.listNotifications.map((item) => {
                      return(
                        <NotificationItem
                          key={item.id}
                          type={item.type}
                          value={item.value}
                          html={item.html}
                          id={item.id}
			  markAsRead={this.markAsRead}
                        />
                      )
                    })
                  : <p>No new notification for now</p>
              }
            </ul>
          </div>
        )}
      </>
    );
  }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []  
};

const styles = StyleSheet.create({
  notifications: {
    fontSize: "20px"
  },

  menuItem: {
    textAlign: "right"
  },

  listStyle: {
    listStyleType: "none",
    margin: 0,
  },
});

export default Notifications;
