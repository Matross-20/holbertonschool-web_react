import { StyleSheet, css } from 'aphrodite';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

class NotificationItem extends PureComponent {
    render() {
        const { id, type, value, html, markAsRead } = this.props;

        const styleClass = type === 'default' ? styles.default : styles.urgent;

        if (value) {
            return (
                <li
                    className={css(styleClass)}
                    data-notification-type={type}
                    onClick={() => markAsRead(id)}
                    data-testid={`item${id}`}
                >
                    {value}
                </li>
            );
        } else if (html) {
            return (
                <li
                    className={css(styleClass)}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead(id)}
                    data-testid={`item${id}`}
                />
            );
        }

        return null;
    }
}

export default NotificationItem;
