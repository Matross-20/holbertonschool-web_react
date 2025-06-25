import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'

export default class NotificationItem extends React.PureComponent {
    render() {
        return (
            <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => this.props.markAsRead(this.props.id)}>
                {this.props.value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    markAsRead: () => {},
    id: 0
};
