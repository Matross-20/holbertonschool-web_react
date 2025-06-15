import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('Header renders without crashing', () => {
  const wrapper = shallow(<Header />)
	expect(wrapper.exists())
});

it('Header renders img and h1 tags', () => {
  const wrapper = shallow(<Header />)
	expect(wrapper.find('img').exists()).toBe(true)
	expect(wrapper.find('h1').exists()).toBe(true)
});
