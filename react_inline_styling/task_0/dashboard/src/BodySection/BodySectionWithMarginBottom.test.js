import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe('The label <BodySectionWithMarginBottom/>', () => {
    it('render correctly with BodySection component and props passed correctly', () => {
        const props = {
            title: 'test title',
            children: <p>test children node</p>
        };

        const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);
        const bodySection = wrapper.find(BodySection);
        expect(bodySection.exists()).toBe(true);
        expect(bodySection.props().title).toEqual('test title');
        expect(bodySection.props().children).toEqual(<p>test children node</p>);
    });
});