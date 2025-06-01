import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySection.css';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="BodySectionWithMargin">
				<BodySection {...this.props} />
			</div>
		);
	};
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}
export default BodySectionWithMarginBottom;