import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';

it('should contain the Notifications component', () => {
    shallow(<App />)
});

it('should call logOut and alert when control + h is pressed', () => {
    const logOutMock = sinon.spy();
    const wrapper = shallow(<App logOut={logOutMock} />);

    // Simulate the keydown event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock.calledOnce).toEqual(true);
    expect(alert.calledWith('Logging you out')).toEqual(true);
 });

it('When pressed control and h keys, called de alert function', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.co)
})

it('App not should have CourseList render', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists(CourseList)).toEqual(false)
})

it('App not should have CourseList render', () => {
    const wrapper = shallow(<App isLoggedIn={true} />)
    expect(wrapper.exists(CourseList)).toEqual(true)
    expect(wrapper.exists(Login)).toEqual(false)
})

it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toEqual(1);
});

it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
});

it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toEqual(1);
});

it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toEqual(1);
});
