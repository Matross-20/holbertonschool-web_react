import Enzyme from 'enzyme';
import Adapter from '@chalbert/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });