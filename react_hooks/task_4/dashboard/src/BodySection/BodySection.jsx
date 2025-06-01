import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySection = ({ 
  title, 
  children, 
  className = "" 
}) => {
  return (
    <div className={`${css(styles.bodySection)} ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const styles = StyleSheet.create({
  bodySection: {
    width: '100%',
    padding: '20px',
  },
});

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BodySection;