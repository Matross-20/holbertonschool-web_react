import React from 'react';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = ({ children, title }) => {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection title={title} >{children}</BodySection>
        </div>
    )
}

export default BodySectionWithMarginBottom;