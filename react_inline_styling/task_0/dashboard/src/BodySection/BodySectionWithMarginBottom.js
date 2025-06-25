import './BodySection.css'
import React from 'react';
import BodySection from './BodySection';

export default function BodySectionWithMarginBottom({ ...props }) {
    return <div className="bodySectionWithMargin">
                <BodySection {...props} />
            </div>
}
