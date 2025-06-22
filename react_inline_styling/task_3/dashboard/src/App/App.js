import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

import './App.css';

const WrappedLogin = WithLogging(Login);
const WrappedCourseList = WithLogging(CourseList);

const styles = StyleSheet.create({
  bodyStyle: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  footerStyle: {
    textAlign: 'center',
    marginTop: '50px',
    borderTop: '2px solid #ccc',
    paddingTop: '10px',
  },
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.bodyStyle)}>
        <Notifications />
        <Header />
        <BodySectionWithMarginBottom title="Course list">
          <WrappedCourseList />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <WrappedLogin />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Some random text</p>
        </BodySection>
        <footer className={css(styles.footerStyle)}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
