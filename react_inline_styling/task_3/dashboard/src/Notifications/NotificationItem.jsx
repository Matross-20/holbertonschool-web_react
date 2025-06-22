import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html } = this.props;
    
    return (
      <li className={css(type === 'urgent' ? styles.urgent : styles.default, styles.responsive)}
      data-notification-type={type}
      onClick={() => this.props.markAsRead(this.props.id)}
      >
        {html ? <span dangerouslySetInnerHTML={html}></span> : value}
      </li>
    );
  }   
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },

  responsive: {
    '@media (max-width: 899px)': {
      default: {
        color: 'blue',
        fontSize: '20px',
        padding: '10px 8px',
        width: '100%',
        borderBottom: '1px solid black',
      },
  
      urgent: {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '10px 8px',
        width: '100%',
        borderBottom: '1px solid black',
      }
    }
  }
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
  __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  value: "",
  html: null,
};

export default NotificationItem;
