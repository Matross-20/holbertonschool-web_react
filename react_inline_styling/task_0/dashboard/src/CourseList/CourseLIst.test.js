import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import CourseList from './CourseList';

describe('<MyComponent />', () => {
  it('renders app', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists);
  });

  it('check to test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.find('tbody')).to.have.lengthOf(3);
  });

  it('check to test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.find('thead')).to.have.lengthOf(2);
  });

  it('verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("tr")).toEqual("No course available yet");
  });

  it('correct render of CourseList when passing a non empty listCourses', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("tr")).toEqual("<CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit}/>");
  });
});
