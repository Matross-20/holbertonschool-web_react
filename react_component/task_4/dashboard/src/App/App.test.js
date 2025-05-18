import React from "react"
import { shallow } from 'enzyme';
import App from './App';
const assert = require('assert');


describe('App component test', () => {
  let OArgsApp = null;
  let ArgsApp = null;

  beforeEach(() => {
    OArgsApp = shallow(<App />);
    ArgsApp = shallow(<App isLoggedIn={true} />);
  });

  afterEach(() => {
    OArgsApp = ArgsApp = null;
  });

  it('App renders without crashing', () => {
    assert.equal(OArgsApp.length, 1);
  });
  it('Whether the <Header /> component exists', () => {
    assert.equal(OArgsApp.find('Header').exists(), true);
  });
  it('Whether the <Login /> component exists', () => {
    assert.equal(OArgsApp.find('Login').exists(), true);
  });
  it('Whether the <Footer /> component exists', () => {
    assert.equal(OArgsApp.find('Footer').exists(), true);
  });
  it('Whether the <Login /> is rendered rather than <CourseList />', () => {
    assert.equal(OArgsApp.find('Login').exists(), true);
    assert.equal(OArgsApp.find('CourseList').exists(), false);
  });
  it('Whether the <CourseList /> is rendered rather than <Login />', () => {
    assert.equal(ArgsApp.find('Login').exists(), false);
    assert.equal(ArgsApp.find('CourseList').exists(), true);
  });

});
