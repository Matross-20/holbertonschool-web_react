import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
	if (value) {
		return <li data-notification-type={type}>{value}</li>;
	} else {
		return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
	}
}

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {}
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	})
};

export default NotificationItem;
