import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import Login from "../Login/Login.jsx";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import { StyleSheet, css } from "aphrodite";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", value: "Urgent requirement - complete by EOD"}
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications notifications={notificationsList} displayDrawer={true} />
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom className={css(styles.responsive)} title="Course list">
            <CourseList courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.</p>
        </BodySection>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({
  responsive: {
    '@media (max-width: 899px)': {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column'
    }
  }
})

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

if (document.getElementById("root")) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
