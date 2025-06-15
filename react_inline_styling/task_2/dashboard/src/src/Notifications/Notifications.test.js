import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'


describe('<Notifications />', () => {
  const wrapper = shallow(<Notifications />)

  it('renders without crashing', () => {
  	expect(wrapper.exists())
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it('renders the correct text', () => {
    expect( wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy()
  });

  it('first list item is correct', () => {
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.menuItem').length).toEqual(1)
	});

  it('notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications}/>)
    expect(wrapper.find('.Notifications').length).toEqual(0)
	});

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.menuItem').length).toEqual(1)
	});

  it('notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications').length).toEqual(1)
	});

});
