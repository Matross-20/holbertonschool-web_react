import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should not rerender with the same list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', html: null, value: 'Notification 1' },
      { id: 2, type: 'urgent', html: null, value: 'Notification 2' },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ displayDrawer: true, listNotifications });
    expect(shouldUpdate).toBe(false);
  });

  it('should rerender with a longer list of notifications', () => {
    const initialList = [
      { id: 1, type: 'default', html: null, value: 'Notification 1' },
    ];

    const updatedList = [
      { id: 1, type: 'default', html: null, value: 'Notification 1' },
      { id: 2, type: 'urgent', html: null, value: 'Notification 2' },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={initialList} />
    );

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ displayDrawer: true, listNotifications: updatedList });
    expect(shouldUpdate).toBe(true);
  });
});
