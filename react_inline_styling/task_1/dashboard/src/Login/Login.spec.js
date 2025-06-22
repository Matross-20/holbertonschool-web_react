import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../Login/Login.jsx';
import '@testing-library/jest-dom';

describe('Login Component', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('renders login form elements', () => {
    const labels = screen.getAllByRole('label');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
