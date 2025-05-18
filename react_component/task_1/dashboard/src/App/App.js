import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  componentDidMount() {
    
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
   
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
   
    if (event.ctrlKey && event.key === 'h') {
      
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    let { isLoggedIn } = this.props;

    return (
      <Fragment>
        <div className="App">
          <div className="upperside">
            <Notifications />
            <Header />
          </div>
          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList />}
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired, 
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
