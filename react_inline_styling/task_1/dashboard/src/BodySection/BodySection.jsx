import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, css } from "aphrodite";

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySection: {
    margin: "2rem 0",
  },
});

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;