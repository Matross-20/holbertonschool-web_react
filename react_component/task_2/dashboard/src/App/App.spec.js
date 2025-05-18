import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
    let logOutMock;
    let wrapper;

    beforeEach(() => {
        logOutMock = jest.fn(); // Mock the logOut function
        wrapper = mount(<App logOut={logOutMock} isLoggedIn={true} />);
    });

    afterEach(() => {
        wrapper.unmount(); // Clean up
        jest.restoreAllMocks(); // Restore mocks
    });

    test('logs out and displays alert when Ctrl + H is pressed', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

        // Simulate keydown event with Ctrl + H
        const event = new KeyboardEvent('keydown', {
            ctrlKey: true,
            key: 'h',
        });
        window.dispatchEvent(event);

        expect(logOutMock).toHaveBeenCalledTimes(1); // logOut function should be called once
        expect(alertMock).toHaveBeenCalledWith('Logging you out'); // alert should display correct message

        alertMock.mockRestore(); // Restore the alert mock
    });
});
