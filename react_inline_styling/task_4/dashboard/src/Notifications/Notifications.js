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
        {!this.props.displayDrawer && <div className={css(styles.menuItem)}>Your notifications</div>}
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
    float: "right",
    padding: "8px",
    border: "1px dashed red",
    animationName: [borderKeyframes],
    animationDuration: "0.7s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    '@media (max-width: 900px)': {
      fontSize: "20px",
      float: "none",
      border: 0,
      padding: 0,
    },
  },

  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
    "@media (max-width: 900px)": {
      display: "none",
    },

  },

  listStyle: {
    '@media (max-width: 900px)': {
      listStyleType: "none",
      margin: 0,
    },
  },
});

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "25%": {
    transform: "translateY(5px)",
  },

  "50%": {
    transform: "translateY(0px)",
  },

  "75%": {
    transform: "translateY(-5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: '3px dashed cyan',
  },

  "100%": {
    border: '3px dashed red',
  },
};


export default Notifications;
