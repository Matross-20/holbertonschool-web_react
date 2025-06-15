import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
  }

  ctrlHEventHandler(e) {
    let k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleKeyPressDown() {
    document.addEventListener('keydown', this.ctrlEventHandler, false);
  };

  componentDidMount() {
    this.handleKeyPressDown();
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.ctrlEventHandler, false);
  };

  render() {

    let {
      isLoggedIn,
    } = this.props;

    let i = 0;
    
    let listNotifications = [
      {
        id: i++,
        type: "default",
        value: "New course available",
      },
      {
        id: i++,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: i++,
        type: "urgent",
        html: {__html: getLatestNotification()},
      }
    ];

    let listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    return (
      <Fragment>
        <div className="App">
          <div className={css(styles.upperside)}>
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {
            isLoggedIn === false &&
            <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
            </BodySectionWithMarginBottom>
          }
          {
            isLoggedIn === true &&
            <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Some random text</p>
          </BodySection>
          <Footer />
        </div>
      </Fragment>
    );  
  };
};

const styles = StyleSheet.create({
  upperside: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    borderBottom: "3px solid red",
    justifyContent: "space-between",
}
});

App.propTypes = {
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
