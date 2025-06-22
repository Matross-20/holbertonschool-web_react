import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('Notifications renders without errors', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Notifications renders the text 'Here is the list of notifications' when notifications are provided", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );
    expect(wrapper.find('.Notifications p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  it('Notifications renders NotificationItem components with the correct html', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );
    const notificationItem = wrapper.find('NotificationItem').first();
    expect(notificationItem.prop('type')).toEqual('default');
    expect(notificationItem.prop('value')).toEqual('New course available');
  });

  it('logs the correct message when a notification is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );
    const notificationItem = wrapper.find('NotificationItem').first();
    notificationItem.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );
    consoleSpy.mockRestore();
  });

  it('does not re-render when the length of the notifications prop does not change', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
    });
    expect(shouldUpdate).toEqual(false);
  });

  it('re-renders when the length of the notifications prop changes', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Project deadline approaching' },
      ],
      displayDrawer: true,
    });
    expect(shouldUpdate).toEqual(true);
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
