/**
 * @jest-environment jsdom
*/

import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import withLogging from './WithLogging';


describe('Test WithLogging HOC function', () => {
  let wrapperShallow = null;
  let wrapperMount = null;
  let mockedConsoleLog = null;
  let LoggingComponent = withLogging(() => <p />);

  beforeEach(() => {
    LoggingComponent = withLogging(() => <p />);
    wrapperShallow = shallow(<LoggingComponent />);
    wrapperMount = mount(<LoggingComponent />);
    mockedConsoleLog = console.log = jest.fn();
  })
  afterEach(() => {
    wrapperShallow = wrapperMount = null;
  })

  it('Component when the wrapped element is pure html', () => {
    assert.equal(wrapperShallow.length, 1);
  });

  it('mount and unmount works perfectly', () => {
    expect(mockedConsoleLog).toHaveBeenCalledTimes(2);
  });
})
