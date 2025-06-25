import { shallow } from 'enzyme';
import BodySection from './BodySection';


describe('BodySection tests', () => {
  it('renders app', () => {
    const wrapper = shallow(<BodySection />);
    container = wrapper.find("h2");
    expect(container).toHaveLength(1);
  });

  it('renders app', () => {
    const wrapper = shallow(<BodySection />);
    container = wrapper.find("test title");
    expect(container).toHaveLength(1);
  });

  it('renders app', () => {
    const wrapper = shallow(<BodySection />);
    container = wrapper.find("p");
    expect(container).toHaveLength(1);
  });

  it('renders app', () => {
    const wrapper = shallow(<BodySection />);
    container = wrapper.find("test children node");
    expect(container).toHaveLength(1);
  });

  it('renders app', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.find("bodySection")).toEqual("bodySection");
  });
});
