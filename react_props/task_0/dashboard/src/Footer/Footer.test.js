import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
    it("Footer renders without any errors", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).toEqual(true);
    });
})