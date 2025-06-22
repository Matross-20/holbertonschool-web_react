import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('contains a div with the class bodySectionWithMargin', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Content</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
  });

  it('renders the BodySection component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Content</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).exists()).toBe(true);
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
