import React from 'react';
import { shallow } from 'enzyme';
import withLogging from './WithLogging';

console.log = jest.fn();

describe('WithLogging', () => {
    it('should log Component when the wrapped element is pure HTML', () => {
       const Component = () => <p />;
       const WrappedComponent = withLogging(Component);
       const wrapper = shallow(<WrappedComponent />);
       
       expect(console.log).toHaveBeenCalledWith('Component is mounted');
   
       wrapper.unmount();
   
       expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
    });
   });
   
describe('WithLogging', () => {
    it('should log Login when the wrapped element is the Login component', () => {
       const Login = () => <div>Login</div>;
       const WrappedComponent = withLogging(Login);
       const wrapper = shallow(<WrappedComponent />);
       
       expect(console.log).toHaveBeenCalledWith('Login is mounted');
   
       wrapper.unmount();
   
       expect(console.log).toHaveBeenCalledWith('Login is going to unmount');
    });
});

afterAll(() => {
    console.log.mockRestore();
});
   