import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).length).toBe(1);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('renders CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).length).toBe(0);
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('calls logOut and shows alert when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App isLoggedIn={true} logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
