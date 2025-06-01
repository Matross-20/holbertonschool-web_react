import React, { PureComponent } from 'react';

// const NotificationItem = ({ id, type, html, value, markAsRead }) => {
//     const style = type === "default" ? { color: "blue" } : { color: "red" };

//     if (value) {
//         return (
//             <li style={style} data-notification-type={type} onClick={() => { markAsRead(id); }}>
//                 {value}
//             </li>
//         );
//     } else if (html) {
//         return (
//             <li style={style} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => { markAsRead(id); }} ></li>
//         );
//     }

//     return null;
// };

class NotificationItem extends PureComponent {
    constructor(props) {
        super(props);

        this.style = this.props.type === "default" ? { color: "blue" } : { color: "red" };
    }

    render() {
        if (this.props.value) {
            return (
                <li style={this.style} data-notification-type={this.props.type} onClick={() => { this.props.markAsRead(this.props.id) }} data-testid={`item${this.props.id}`}>
                    {this.props.value}
                </li>
            );
        } else if (this.props.html) {
            return (
                <li style={this.style} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => { this.props.markAsRead(this.props.id); }} data-testid={`item${this.props.id}`}></li>
            );
        }

        return null;
    }
}

export default NotificationItem;

