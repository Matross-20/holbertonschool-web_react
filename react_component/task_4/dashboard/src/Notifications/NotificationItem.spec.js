import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('calls markAsRead when clicked', () => {
        const markAsReadMock = jest.fn();
        const wrapper = shallow(
            <NotificationItem
                id={1}
                type="default"
                value="Test notification"
                markAsRead={markAsReadMock}
            />
        );

        wrapper.find('li').simulate('click');

        expect(markAsReadMock).toHaveBeenCalledWith(1);
    });
});
