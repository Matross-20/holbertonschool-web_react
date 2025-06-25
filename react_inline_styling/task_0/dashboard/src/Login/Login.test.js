import { shallow } from "enzyme";
import Login from "./Login";
import React from 'react'

describe('checks that Login component renders without crashing', () => {
    it('verify it renders without crashing', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.exists().toEqual(true))
    })
    it('Verify that the components renders 2 input tags', () => {
        const wrapper = shallow(<Login />)
        wrapper.update()
        expect(wrapper.find('div.App-body input')).toHaveLength(2)
    })
    it('Verify that the components renders 2 label tags', () => {
        const wrapper = shallow(<Login />)
        wrapper.update()
        expect(wrapper.find('div.App-body label')).toHaveLength(2)
    })
})