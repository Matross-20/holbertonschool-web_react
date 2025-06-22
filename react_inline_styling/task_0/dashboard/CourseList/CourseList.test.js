import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  describe('When listCourses is empty or not provided', () => {
    it('renders correctly', () => {
      let wrapper = shallow(<CourseList />);
      expect(wrapper.find(CourseListRow).length).toEqual(3);
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');

      wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.find(CourseListRow).length).toEqual(3);
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');
    });
  });

  describe('When listCourses is provided', () => {
    it('renders correctly with the right number of rows', () => {
      const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find(CourseListRow).length).toEqual(5); // 2 header rows + 3 course rows
    });
  });
});
