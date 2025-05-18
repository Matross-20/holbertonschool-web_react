import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("input tag component renders", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.App-footer p")).toHaveLength(1);
    expect(wrapper.find("div.App-footer p").text()).toContain("Copyright");
  });
});
