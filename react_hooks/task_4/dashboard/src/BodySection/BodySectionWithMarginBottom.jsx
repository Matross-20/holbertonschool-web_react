import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ 
  title, 
  children, 
  className = "" 
}) => {
  return (
    <div className={`${css(styles.bodySectionWithMargin)} ${className}`}>
      <BodySection title={title}>
        {children}
      </BodySection>
    </div>
  );
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BodySectionWithMarginBottom;