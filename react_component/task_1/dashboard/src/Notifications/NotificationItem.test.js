import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";


describe("<Notifications />", () => {
  it("NotificationsItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("The component accept type and value properties", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li").text()).toEqual("test");
    expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
  });

  it("the component accept html propertie", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(wrapper.find("li").html()).toEqual("<li data-notification-type=\"default\"><u>test</u></li>");
  });
});
