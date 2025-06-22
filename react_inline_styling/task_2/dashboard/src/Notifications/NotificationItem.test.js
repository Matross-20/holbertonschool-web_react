import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test notification" />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders with correct type styling', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Urgent notification" />);
    expect(wrapper.hasClass('red')).toBeTruthy();
  });

  it('renders with default type styling if type is not urgent', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Default notification" />);
    expect(wrapper.hasClass('blue')).toBeTruthy(); 
  });

  
});
