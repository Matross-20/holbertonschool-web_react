import React from 'react';
import PropTypes from 'prop-types'
import logo from '../assets/holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import './App.css';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20
  },
  {
    id: 3,
    name: 'React',
    credit: 40
  }
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available'
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available'
  },
  {
    id: 3,
    type: 'urgent',
    html: {__html: getLatestNotification()}
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    const isCtrl = e.ctrlKey;

    if (isCtrl && e.keyCode == 72) {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  render() {
    const footerText = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header text='School dashboard' src={logo} alt='Holberton logo'/>
          <div className="App-body">
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list ">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom> 
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login text="Login to access the full dashboard" />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>This is some random text</p>
            </BodySection>
          </div>
          <Footer text={footerText} />
        </div>
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
