import './App.css';
import { getFullYear,getFooterCopy } from './utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends React.Component {
 
 
  render() {
      return (
          <React.Fragment>
          <Notifications listNotifications={listNotifications}/>
          <div className="App">
          <Header />
          <div className="App-body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
            <CourseList />
            </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">

            </BodySection>
          </div>
          <div className="App-footer">
          <Footer />
          </div>
          </div>
          </React.Fragment>
        );
  }
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  logOut: PropTypes.func,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

export default App;
