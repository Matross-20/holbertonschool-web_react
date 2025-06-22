import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('calls markAsRead on click with the right ID', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={1} markAsRead={markAsReadMock} />
    );
    wrapper.find('li').simulate('click');

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
