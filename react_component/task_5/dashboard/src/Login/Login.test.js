import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("input tag component renders", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.Login-body input")).toHaveLength(2);
  });
  
  it("label tag component renders", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.Login-body label")).toHaveLength(2);
  });
});
