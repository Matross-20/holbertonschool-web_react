import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('verify it renders without crashing', () => {
    shallow(<Login />);
  });

  it('Verify that the components renders 2 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('Verify that the components renders 2 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
