import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;
    const style =
      type === "urgent"
        ? [styles.base, styles.urgent]
        : [styles.base, styles.default];

    return html ? (
      <li
        className={css(...style)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead()}
      />
    ) : (
      <li
        className={css(...style)}
        data-notification-type={type}
        onClick={() => markAsRead()}
      >
        {value}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    padding: "10px 8px",
    fontSize: "20px",
    borderBottom: "1px solid black",
    boxSizing: "border-box",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;