import { shallow } from 'enzyme';
import Notification from "./Notifications";

describe('<MyComponent />', () => {
  it('renders app', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists);
  });

  it('renders App-header', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('NotificationItem')).to.have.lengthOf(3);
  });

  it('renders App-body', () => {
    const { getByText } = within(screen.getByTestId('Notifications'))
    expect(getByText('Here is the list of notifications')).toBeInTheDocument()
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<Notification displayDrawer/>);
    expect(wrapper.find("menuItem")).to.have.lengthOf(0);
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<Notification/>);
    expect(wrapper.find("Notifications")).to.have.lengthOf(1);
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<Notification/>);
    expect(wrapper.find("menuItem")).to.have.lengthOf(0);
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<Notification displayDrawer/>);
    expect(wrapper.find("Notifications")).to.have.lengthOf(1);
  });

  it('renders correctly if you pass an empty array', () => {
    const listNotifications = [];
  });

  it('when listNotifications is empty the message No new notifications for now is displayed', () => {
    const wrapper = shallow(<Notification displayDrawer/>);
    expect(wrapper.find("listNotifications")).toEqual("No new notifications for now");
  });

});
