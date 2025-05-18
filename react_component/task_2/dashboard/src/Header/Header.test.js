import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("img tag component renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header img")).toHaveLength(1);
  });
  
  it("h1 tag component renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header h1")).toHaveLength(1);
  });
});
