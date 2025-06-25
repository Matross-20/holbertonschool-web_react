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
     height: '50vmin',
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
  footer: {}
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
          <p>This is the place for the random text</p>
        </BodySection>
      </div>
      <Footer data-testind="footer" className={css(styles.footer)} />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

