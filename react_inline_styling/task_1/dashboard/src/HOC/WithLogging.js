import React, { Component } from "react";
import PropTypes from "prop-types";

class WithLogging extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`Component ${this.props.displayName} is mounted`);
    }

    componentWillUnmount() {
        console.log(`Component ${this.props.displayName} is going to unmount`);
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <>
                {children}
            </>
        );
    }
}

export default WithLogging;