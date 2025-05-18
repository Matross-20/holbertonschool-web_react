import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";


describe("<Notifications />", () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Renders list notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Renders correct html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('menuItem is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('menuItem is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('Renders correctly if you pass an empty array or if don’t pass the listNotifications', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('When you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem));
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('When listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} isLoggedIn={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });
});
