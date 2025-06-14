import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: '#ff0000'
  },
  default: {
    color: '#0000ff'
  }
})


class NotificationItem extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  render(){

    if (this.props.value) {
      return (<li data-notification-type={this.props.type} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default)} onClick={() => {this.props.markAsRead(this.props.id)}} >{this.props.value}</li>);
    } else {
      return (
        <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default)} onClick={() => {this.props.markAsRead(this.props.id)}}></li>
      );
    }
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {}
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;