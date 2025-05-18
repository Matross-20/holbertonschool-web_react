import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Add event listener when the component is mounted
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Remove event listener when the component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Handle keydown event to check for Ctrl + H key combination
  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

// Define default props and prop types
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}, // Default logOut is an empty function
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func, // logOut should be a function
};

export default App;
