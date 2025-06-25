import React from "react";
import PropTypes from 'prop-types';

function BodySection(props) {
    return <div className='bodySection'>
        <h2>{props.title}</h2>
        {props.children}
    </div>;
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default BodySection;