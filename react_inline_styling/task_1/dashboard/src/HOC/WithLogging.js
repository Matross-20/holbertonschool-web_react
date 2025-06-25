const withLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {
       componentDidMount() {
         console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} is mounted`);
       }
   
       componentWillUnmount() {
         console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} is going to unmount`);
       }
   
       render() {
         return <WrappedComponent {...this.props} />;
       }
    }
   
    WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
   
    return WithLogging;
   };
   