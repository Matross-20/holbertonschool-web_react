class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        comments: DataSource.getComments()
      };
    }
  
    componentDidMount() {
      console.log(`Component ${this.name} is mounted`);
    }
  
    componentWillUnmount() {
        console.log(`Component ${this.name} is going to unmount`);
    }
  
    handleChange() {
      this.setState({
        comments: DataSource.getComments()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  }

  function WithLogging(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default WithLogging;
