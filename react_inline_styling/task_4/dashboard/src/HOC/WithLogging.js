import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is mounted on componentDidMount()`);
        };
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount on componentWillUnmount()`);
        };
        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
    WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WithLoggingComponent;
};

export default WithLogging;