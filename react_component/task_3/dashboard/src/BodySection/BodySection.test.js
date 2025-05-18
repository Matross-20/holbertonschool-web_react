import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection test', () => {

  let BodySectionWithChildren = null;

  beforeEach(() => {
    BodySectionWithChildren = shallow(<BodySection title={'test title'}>
                                        <p>test children node</p>
                                      </ BodySection>);
  });

  afterEach(() => {
    BodySectionWithChildren = null;
  });

  it('BodySection component actually renders without crashing', () => {
    assert.equal(BodySectionWithChildren.length, 1);
  });
  
  it('Whether two one h2 element and one p element exists in the render', () => {
    assert.equal(BodySectionWithChildren.find('.bodySection').exists(), true);
    
    assert.equal(BodySectionWithChildren.find('h2').length, 1);
    assert.equal(BodySectionWithChildren.find('h2').text(), 'test title');
    assert.equal(BodySectionWithChildren.find('p').length, 1);
    assert.equal(BodySectionWithChildren.find('p').text(), 'test children node')
  });
})
