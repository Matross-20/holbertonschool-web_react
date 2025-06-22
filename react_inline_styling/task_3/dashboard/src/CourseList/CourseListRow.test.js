import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseListRow Component', () => {
    describe('When isHeader is true', () => {
        it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="HeaderCell" />);
            expect(wrapper.find('th')).toHaveLength(2);
        });

        it('renders two cells when textSecondCell is present', () => {
            const wrapper = shallow(
                <CourseListRow isHeader={true} textFirstCell="HeaderCell" textSecondCell="SecondCell" />
            );
            expect(wrapper.find('th')).toHaveLength(2);
        });
    });

    describe('When isHeader is false', () => {
        it('renders correctly two td elements within a tr element', () => {
            const wrapper = shallow(
                <CourseListRow isHeader={false} textFirstCell="Cell1" textSecondCell="Cell2" />
            );
            expect(wrapper.find('td')).toHaveLength(2);
        });

        it('renders correctly one td element within a tr element when textSecondCell does not exist', () => {
            const wrapper = shallow(
                <CourseListRow isHeader={false} textFirstCell="Cell1" />
            );
            expect(wrapper.find('td')).toHaveLength(2);
        });
    });
});