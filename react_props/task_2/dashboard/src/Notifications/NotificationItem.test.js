import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";


describe("<Notifications />", () => {
  it("NotificationsItem renders without errors", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that by passing dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li").text()).toEqual("test");
    expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
  });

  it("Verify that by passing a dummy html prop", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
  });
});
