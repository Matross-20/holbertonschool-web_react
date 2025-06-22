import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, css} from 'aphrodite'

class NotificationItem extends PureComponent {
    render() {
        const {type, html, value, markAsRead, idx} = this.props;
        return html ? (
            <li 
                dangerouslySetInnerHTML={{__html: html.__html}}
                data-priority={type}
                className={type === "default" ? css(styles.liDefault) : css(styles.liUrgent)}
                onClick={() => {markAsRead(idx)}}>
            </li>
        ) : (
            <li 
                data-priority={type}
                className={type === "default" ? css(styles.liDefault) : css(styles.liUrgent)}
                onClick={() => {markAsRead(idx)}}>
                {value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    idx: PropTypes.number.isRequired
}
  
NotificationItem.defaultProps = {
    type: "default",
}

const styles = StyleSheet.create({
    liDefault: {
        color: "blue",
    },
    
    liUrgent: {
        color: "red",
    },
})

export default NotificationItem;