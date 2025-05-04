// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('renders Notifications component without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

test('renders Notifications component with three list items', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('.Notifications-list li');

  expect(listItems).toHaveLength(3);
  expect(listItems.at(0).text()).toBe('Item 1');
  expect(listItems.at(1).text()).toBe('Item 2');
  expect(listItems.at(2).text()).toBe('Item 3');
});

test('renders the text "Here is the list of notifications" with shallow rendering', () => {
  const wrapper = shallow(<Notifications />);
  const textElement = wrapper.find('p').text();

  expect(textElement).toBe('Here is the list of notifications');
});
