import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.PureComponent{
  constructor(props){
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
  
  render(){
    const { displayDrawer, listNotifications } = this.props;
      return (
        <>
          <div className='menuItem'>Your notifications</div>
          {displayDrawer && (
          <div id='Notifications' className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <ul>
              
              {listNotifications.length === 0 &&
                <NotificationItem type='default' value='No new notification for now' />
              }
              {listNotifications.map((item) => (
                <NotificationItem 
                key={item.id}
                html={item.html}
                type={item.type}
                value={item.value}
                markAsRead={this.markAsRead}
                />
              ))}
            </ul>
            <button
              aria-label='Close'
              type='button'
              onClick={() => console.log('Close button has been clicked')}
              style={{
                position: 'absolute',
                right: '5px',
                top: '10px',
                cursor: 'pointer',
                maxHeight: '17px',
                background: 'transparent',
                border: 'none',
              }}
            >
              <img
                src={closeIcon}
                alt='close-icon'
                style={{
                  position: 'relative',
                  maxHeight: '12px',
                  background: 'transparent',
                  border: 'none',
                }}
              />
            </button>
          </div>
          )}
        </>
      );
        
  }
    
}

const styles = StyleSheet.create({
  notifications: {
    border: 'dashed blue 1px',
    position: 'absolute',
    right: 50,
    width: 400,
    top: 40,
  }
})


Notifications.defaultProps = {
  displayDrawer : false,
  //markAsRead: () => {},
  id: NaN,
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
}




export default Notifications;