import React from "react";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection.jsx";
import { StyleSheet, css } from "aphrodite";

const BodySectionWithMarginBottom = ({ title, children = null }) => { 
  return (
    <div className={css(styles.margin)}>
    <BodySection title={title}>{children}</BodySection>
  </div>
  )
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: "40px"
  }
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;