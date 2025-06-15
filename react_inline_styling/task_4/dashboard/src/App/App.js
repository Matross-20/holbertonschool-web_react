import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from 'aphrodite';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification()} },
];

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  footer: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  paraNews: {
    width: "760px",
    '@media (max-width: 900px)': {
      width: "420px",
    },
  },
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static propTypes = {
	  logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool
  };

  static defaultProps = {
    logOut: () => {},
    isLoggedIn: false
  };

  handleKeyDown(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
            { this.props.isLoggedIn
              ? <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
                </BodySectionWithMarginBottom>
            }
          <Footer />
        </div>
        <BodySection title="News from the School">
          <p className={css(styles.paraNews)}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>
        </BodySection>
      </>
    );
  }
}

export default App;
