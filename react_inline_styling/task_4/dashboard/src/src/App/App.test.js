import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

describe('<App />', () => {
  it('App renders without crashing', () => {
    shallow(<App />)
  });

  it('contains a <Footer /> component', () => {
    shallow(<Footer />)
	});

  it('contains a <Header /> component', () => {
    shallow(<Header />)
  });

  it('contains a <Login /> component', () => {
    shallow(<Login />)
  });

  it('contains a <Notifications /> component', () => {
    shallow(<Notifications />)
  });
});
