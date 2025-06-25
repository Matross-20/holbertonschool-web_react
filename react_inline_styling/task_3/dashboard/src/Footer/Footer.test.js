import Footer from "./Footer";
import { shallow } from "enzyme";

it('render without crashing', () => {
    shallow(<Footer />);
});

it('render the expecific text copyrigth', () => {
    const wrapper = shallow(<Footer />);
    const renderedText = wrapper.text()
    expect(renderedText.includes("Copyright")).toEqual(true)
});
