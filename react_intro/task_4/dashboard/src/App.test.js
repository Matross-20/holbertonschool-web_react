// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders App component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('renders App component with App-header div', () => {
  const wrapper = shallow(<App />);
  const appHeaderDiv = wrapper.find('.App-header');
  expect(appHeaderDiv.exists()).toBe(true);
});

test('renders App component with App-body div', () => {
  const wrapper = shallow(<App />);
  const appBodyDiv = wrapper.find('.App-body');
  expect(appBodyDiv.exists()).toBe(true);
});

test('renders App component with App-footer div', () => {
  const wrapper = shallow(<App />);
  const appFooterDiv = wrapper.find('.App-footer');
  expect(appFooterDiv.exists()).toBe(true);
});
