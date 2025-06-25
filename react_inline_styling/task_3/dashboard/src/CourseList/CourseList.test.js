import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

it('Renders without crashing', () => {
    shallow(<CourseList />)
})

it('Renders five differents rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toEqual(5)
})

describe('With CourseList Empty', () => {
    it('renders correctly with an empty listCourses', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders correctly without passing listCourses', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });
});


describe('With CourseList containing elements', () => {
    const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of CourseListRow', () => {
        expect(wrapper.find(CourseListRow).length).toEqual(listCourses.length + 2); // +2 for headers
    });
});
