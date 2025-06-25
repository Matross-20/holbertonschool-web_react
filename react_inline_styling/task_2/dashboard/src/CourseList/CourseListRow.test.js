import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
 describe('when isHeader is true', () => {
    test('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    });

    test('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('th')).toHaveLength(2);
    });
 });

 describe('when isHeader is false', () => {
    test('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('td')).toHaveLength(2);
    });
 });
});
