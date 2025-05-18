import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead }) {
	if (value) {
		return <li data-notification-type={type}>{value}</li>;
	} else {
		return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={(id) => markAsRead(id)}></li>;
	}
}

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {},
	id: 0,
	markAsRead: () => {}
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	id: PropTypes.number,
  	markAsRead: PropTypes.func,
};

export default NotificationItem;
