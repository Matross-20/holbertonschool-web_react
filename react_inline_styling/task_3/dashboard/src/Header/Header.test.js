import Header from "./Header";
import { shallow } from "enzyme";

it('render without crashing', () => {
    shallow(<Header />);
});

it('render imgand h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('h1').length).toEqual(1)
})