import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";

describe('the label <BodySection />', () => {
    it('render correctly whith children and h2 element', () => {
        const wrapper = shallow(
            <BodySection title='test title'>
                <p>Test children node</p>
            </BodySection>
        );

        expect(wrapper.find('h2').text()).toEqual('test title');
        expect(wrapper.find('p').text()).toEqual('Test children node');
    })
})