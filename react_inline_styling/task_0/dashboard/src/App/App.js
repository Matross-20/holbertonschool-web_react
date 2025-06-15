import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WithLogging from "../HOC/WithLogging";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyDownCombination = this.handleKeyDownCombination.bind(this);
  }

  handleKeyDownCombination(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDownCombination);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDownCombination);
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
          <p>dhda d981273t sqwcdfjk</p>
        </BodySection> 
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;
