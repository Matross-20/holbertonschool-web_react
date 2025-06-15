import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('Footer renders without crashing', () => {
  const wrapper = shallow(<Footer />)
	expect(wrapper.exists())
});

it('Footer renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper.text()).toContain('Copyright');
});
