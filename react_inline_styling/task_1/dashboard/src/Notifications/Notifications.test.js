import { shallow } from 'enzyme';
import { Notification } from './Notifications';
import NotificationItem from './NotificationItem';
import { it } from 'node:test';

it('renders without crashing', () => {
    shallow(<Notification />);
});

it('renders correctly with an empty listNotifications', () => {
    const wrapper = shallow(<Notification listNotifications={[]} />);
    expect(wrapper.exists()).toEqual(true);
});

it('renders correctly without passing listNotifications', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists()).toEqual(true);
});

it('renders the correct number of NotificationItems', () => {
    const listNotifications = [
        { id: 1, type: 'test', html: { __html: '<u>test</u>' }, value: 'test' },
        { id: 2, type: 'test', html: { __html: '<u>test</u>' }, value: 'test' },
        { id: 3, type: 'test', html: { __html: '<u>test</u>' }, value: 'test' }
    ];
    const wrapper = shallow(<Notification listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toEqual(3);
});

it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notification listNotifications={[]} />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(false);
    expect(wrapper.contains('No new notification for now')).toEqual(true);
});

it('logs the correct message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notification />);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
});

it('The menuItem is displayed if displayDrawer is true', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.hasClass('menuItem')).toEqual(true)
});

it('The menuItem is displayed if displayDrawer is false', () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.hasClass('menuItem')).toEqual(true)
});

it('renders the menu items is not displayed', () => {
    const wrapper = shallow(<Notification displayDrawer={false}/>);
    expect(wrapper.hasClass('Notifications')).toEqual(false);
});

it('renders the menu items is displayed', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    expect(wrapper.hasClass('Notifications')).toEqual(true);
});

it('renders three list items', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.find(NotificationItem).length).toEqual(3);
});

it('renders the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find(NotificationItem).first().prop('html')).toEqual({ __html: '<u>test</u>' });
});

it('renders the text "Here is the list of notifications"', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
});

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../Notifications';

describe('Notifications', () => {
    const initialProps = {
        displayDrawer: true,
        listNotifications: ['notification1']
    };

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications {...initialProps} />);
    });

    it('does not re-render when the props are updated with the same list', () => {
        wrapper.setProps({ ...initialProps });
        expect(wrapper.instance().shouldComponentUpdate({ ...initialProps })).toEqual(false);
    });

    it('does re-render when the props are updated with a longer list', () => {
        const newProps = {
            ...initialProps,
            listNotifications: ['notification1', 'notification2']
        };
        wrapper.setProps(newProps);
        expect(wrapper.instance().shouldComponentUpdate(newProps)).toEqual(true);
    });
});
