import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type = 'default', value, html, markAsRead }) => {
    const handleClick = () => {
        if (markAsRead) {
            markAsRead(id);
        }
    };
    return (
        <li className="notification-item" data-notification-type={type} onClick={handleClick}>
            { html ? ( <div dangerouslySetInnerHTML={html} /> ) : ( <span>{value}</span> ) }
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