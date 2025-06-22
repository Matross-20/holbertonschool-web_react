import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component tests', () => {
  it('should render correctly a BodySection component and pass the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    expect(wrapper.find(BodySection).props().title).toBe('test title');
    expect(wrapper.find(BodySection).contains(<p>test children node</p>)).toBe(true);
  });
});
