import Login from "./Login";
import { shallow } from "enzyme";

if('render without crashing', () => {
    shallow(<Login />);
});

it('render two inputs and 2 labels', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
});
