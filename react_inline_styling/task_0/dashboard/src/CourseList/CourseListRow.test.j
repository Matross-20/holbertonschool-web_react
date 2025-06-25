import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('<MyComponent />', () => {
  it('renders app', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists);
  });

  it('check to test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.find('CourseListRow')).to.have.lengthOf(2);
  });

  it('renders App-body', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.find('td')).to.have.lengthOf(2);
  });
});
