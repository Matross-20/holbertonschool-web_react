import React from 'react'
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';


function BodySectionWithMarginBottom(props) {
  return (
    <div className='bodySectionWithMargin'>
      <BodySection {...props}/>
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default BodySectionWithMarginBottom
