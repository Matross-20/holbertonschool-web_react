import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';


beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

describe('WithLogging HOC', () => {
  it('logs mount and unmount for HTML element', () => {
    const WrappedComponent = WithLogging(() => <p>Hello</p>);
    const wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component is mounted');
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('logs mount and unmount for Login component', () => {
    const Login = () => <div>Login component</div>;
    Login.displayName = 'Login'; 

    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
