import Header from "./Header";
import { shallow } from "enzyme";

describe('it renders the header component without crashing', () => {
    it('checks that the compnent exists', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists()).to.equal(true);
    })
    it("Verify that the components render img", () => {
        const wrapper = shallow(<Header />);
        wrapper.update();
        expect(wrapper.find("div.App-header img")).toHaveLength(1);
    });
    it("Verify that the components render h1", () => {
        const wrapper = shallow(<Header />);
        wrapper.update();
        expect(wrapper.find("div.App-header h1")).toHaveLength(1);
    });
})
