import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login />", () => {
    it("Login renders without any errors", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toEqual(true);
    });
})