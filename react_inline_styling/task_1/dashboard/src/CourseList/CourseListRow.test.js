import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders a row with correct background color when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });

  it('renders a header row with correct background color when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });
});
