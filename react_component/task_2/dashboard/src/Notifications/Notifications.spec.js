import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('logs the correct message when a notification is clicked', () => {
        const notifications = [
            { id: 1, value: 'New course available', type: 'default' },
            { id: 2, value: 'New resume available', type: 'urgent' }
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);

        // Mock console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Simulate click on the first notification
        wrapper.find(NotificationItem).first().simulate('click');

        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

        // Restore the mocked function
        consoleSpy.mockRestore();
    });
});
