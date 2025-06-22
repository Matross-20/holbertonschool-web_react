import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html } = this.props;
    return (
      <li className={this.props.className}>
        {html ? <span dangerouslySetInnerHTML={html}></span> : value}
      </li>
    );
  }   
}

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
