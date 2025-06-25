import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('verify it renders without crashing', () => {
    shallow(<Footer />);
  });

  it('img', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('Footer')).toContain('Copyright')
  });
});
