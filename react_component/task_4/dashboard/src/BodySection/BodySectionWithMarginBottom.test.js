import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom test', () => {
  let BodySectionWithMarginBottomWithChildren = null;

  beforeEach(() => {
    BodySectionWithMarginBottomWithChildren = shallow(<BodySectionWithMarginBottom title={'test title'}>
                                                        <p>test children node</p>
                                                      </ BodySectionWithMarginBottom>);
  });
  afterEach(() => {
    BodySectionWithMarginBottomWithChildren = null;
  });

  it('Component render correctly', () => {
    assert.equal(BodySectionWithMarginBottom.length, 1);
  });
  it('Component contains the correct elements', () => {
    assert.equal(BodySectionWithMarginBottomWithChildren.find('.bodySectionWithMargin').exists(), true);
    assert.equal(BodySectionWithMarginBottomWithChildren.find('BodySection').exists(), true);
  });

})
