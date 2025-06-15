import React, { Component, Fragment } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	};

	shouldComponentUpdate(nextProps) {
		if (nextProps.listNotifications.length > this.props.listNotifications.length) {
			return true;
		}
		return false;
	};

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};


	render() {
		let {
			displayDrawer,
			listNotifications
		} = this.props;

		return (
			<div className="NotificationsComponent">
				<div className={css(style.menuItem)}>
					Your notifications
				</div>
				{
					displayDrawer &&
					<div className={css(style.Notifications)}>
						<button
							style={{
								color: '#3a3a3a',
								fontWeight: 'bold',
								background: 'none',
								border: 'none',
								fontSize: '15px',
								position: 'absolute',
								right: '3px',
								top: '3px',
								cursor: 'pointer',
								outline: 'none',
							}}
							aria-label="Close"
							onClick={(e) => {
								console.log('Close button has been clicked');
							}}
						>
							<img
								src={closeIcon}
								alt="close icon"
							/>
						</button>
						{
							listNotifications.length === 0 &&
							<p>No new notification for now</p>
						}
						{
							listNotifications.length > 0 &&
							<Fragment>
								<p>Here is the list of notifications</p>
								<ul>
									{
										listNotifications.map((notification) => {
											return (
												<NotificationItem
													key={notification.id}
													type={notification.type}
													value={notification.value}
													html={notification.html}
													markAsRead={this.markAsRead}
												/>
											)
										})
									}
									</ul>
								</Fragment>
				}
			</div>
	}
	</div>
		);
	};
};

const style = StyleSheet.create({
	Notifications: {
		border: '2px dotted red',
		padding: '6px 12px',
		marginTop: '12px',
		position: 'relative',
	},
	menuItem: {
		textalign: 'right',
		fontWeight: 'bold',
	},
});

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

export default Notifications;
