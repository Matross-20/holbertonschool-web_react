import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import assert from  'assert';

describe("<CourseListRow />", () => {
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow isHeader={true}
                                           textFirstCell={'first'}
                                           textSecondCell={'second present'} />);
    assert.equal(wrapper.length, 1);
  });

  describe("When isHeader is true", () => {
    it("When isHeader is True renders two cells when textSecondCell is present", () => {
      const wrapper = shallow(<CourseListRow isHeader={true}
                                            textFirstCell={'first'}
                                            textSecondCell={'second present'} />);
      assert.equal(wrapper.find('th').length, 2);
    });

    it('When textSecondCell is null', () => {
      const wrapper = shallow(<CourseListRow isHeader={true}
                                              textFirstCell={'first'}
                              />);
      assert.equal(wrapper.find('th').length, 1);
      assert.equal(wrapper.find('th').html().includes('colSpan=\"2\"'), true);
    });
  });

  describe('When isHeader is False', () => {
    it('Tests whether two <th> cells are present when isHeader is false', () => {
      const wrapper = shallow(<CourseListRow isHeader={false}
                                             textFirstCell={'first'}
                              />);
      assert.equal(wrapper.find('td').length, 2);
    });
  });

});
