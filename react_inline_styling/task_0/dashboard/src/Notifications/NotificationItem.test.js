import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
    it('should render the correct HTML with dummy HTML prop', () => {
        const htmlProp = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem type="default" html={htmlProp} />);
        expect(wrapper.find('li.notification-item').prop('data-notification-type')).toEqual('default');
        expect(wrapper.find('li.notification-item div').prop('dangerouslySetInnerHTML')).toEqual(htmlProp);
        expect(wrapper.find('li.notification-item span')).toHaveLength(0);
    });
  
    it('should render the correct HTML without dummy HTML prop', () => {
        const wrapper = shallow(<NotificationItem type="default" value="Test Value" />);
        expect(wrapper.find('li.notification-item').prop('data-notification-type')).toEqual('default');
        expect(wrapper.find('li.notification-item span').text()).toEqual('Test Value');
        expect(wrapper.find('li.notification-item div')).toHaveLength(0);
    });
});