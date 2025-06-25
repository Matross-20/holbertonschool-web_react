import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('verify it renders without crashing', () => {
    shallow(<Header />);
  });

  it('img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
