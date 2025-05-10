import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("Test nº1 Renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it("Test nº2 Renders App-header", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });
  it("Test nº3 Renders App-body", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("Test nº4 Renders App-footer", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(1);
  });
});