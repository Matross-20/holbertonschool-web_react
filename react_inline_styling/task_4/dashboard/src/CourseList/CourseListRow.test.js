import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly as header row', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
    );
    expect(wrapper.find('tr').hasClass('header')).toBeTruthy();
  });

  it('renders correctly as default row', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="ES6" textSecondCell={60} />
    );
    expect(wrapper.find('tr').hasClass('row')).toBeTruthy();
  });

  
});
