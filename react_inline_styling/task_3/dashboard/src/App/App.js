import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types'
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const styles = StyleSheet.create({
  body: {
     fontFamily: "'Times New Roman', Times, serif",
     textAlign: 'center',
     height: 'auto',
  },
  appBody: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'start',
     height: 'auto',
     borderBottom: '3px solid rgb(225, 29, 63)',
  },
  top: {
     width: '100%',
     height: '200px',
     display: 'flex',
     position: 'relative',
     flexDirection: 'row-reverse',
     justifyContent: 'space-between',
     borderBottom: '3px solid rgb(225, 29, 63)',
  },
 });
 

export default function App({ isLoggedIn = true, logOut = () => {} }) {

  document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
      console.log('Preciono control + h')
      alert('Logging you out')
      logOut()
    }
  })

  const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40},
  ]

  const listNotifications = [
    { type: "default", html: "", value: "New course available" },
    { type: "urgent", html: "", value: "New resume available" },
    { type: "", html: "<strong class='strong'>Urgent requirement</strong>", value: " - complete by EOD" }
];
  
  return (
    <div className={css(styles.body)}>
      <div className={css(styles.top)}>
        <Notifications data-testid="notifications" displayDrawer={isLoggedIn} listNotifications={listNotifications}/>
        <Header data-testid="header" />
      </div>
      <div className={css(styles.appBody)}>
        {!isLoggedIn ?
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login data-testid="login" />
          </BodySectionWithMarginBottom>
          :
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        }
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </BodySection>
      </div>
      <Footer data-testind="footer" />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

