import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import '@testing-library/jest-dom';

describe('App Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        const appComponent = wrapper.find('.App');
        expect(appComponent.length).toBe(1);
    });

    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).length).toBe(1);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('contains the Login component when isLoggedIn is false', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(Login).length).toBe(1);
    });

    it('does not contain the CourseList component when isLoggedIn is false', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(CourseList).length).toBe(0);
    });

    it('does not contain the Login component when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).length).toBe(0);
    });

    it('contains the CourseList component when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).length).toBe(1);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
    });
});