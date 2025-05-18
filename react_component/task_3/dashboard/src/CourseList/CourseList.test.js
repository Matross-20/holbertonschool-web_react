import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import CourseListRow from './CourseListRow';


describe("<CourseList />", () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: '60' },
    { id: 2, name: 'Webpack', credit: '20' },
    { id: 3, name: 'React', credit: '40' }
  ];

  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  
  it('Check that it renders different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);    
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('CourseList renders correctly', () => {
    let wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('Component renders correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow).first().html()).toEqual('<tr><th colSpan=\"2\">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
