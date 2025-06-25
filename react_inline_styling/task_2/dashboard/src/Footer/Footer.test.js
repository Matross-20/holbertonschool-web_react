import { shallow } from "enzyme";
import Footer from './Footer'

describe('render the Footer component to verify it renders without crashing', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />)
        expext(wrapper.exists()).to.equal(true);
    })
    it('verify that the component contain Copyright', () => {
        const wrapper = shallow(<Footer />)
        wrapper.update()
        expect(wrapper.find("div.footer p")).toHaveLength(1);
        expect(wrapper.find("div.footer p").text()).toContain("Copyright");
    })
})