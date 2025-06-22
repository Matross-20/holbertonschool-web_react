import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('Notifications Component', () => {
    test('renders without crashing', () => {
        render(<Notifications />);
    });

    test('renders three list items', () => {
        const { container } = render(<Notifications />);
        const listItems = container.querySelectorAll('li');
        expect(listItems.length).toBe(3);
    });

    test('renders the text "Here is the list of notifications"', () => {
        const { getByText } = render(<Notifications />);
        const notificationText = getByText('Here is the list of notifications');
        expect(notificationText).toBeInTheDocument();
    });
});