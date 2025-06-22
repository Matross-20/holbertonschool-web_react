import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders Holberton logo', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      expect.stringContaining('holberton-logo')
    );
    expect(logo).toHaveAttribute('alt', 'Holberton logo');
  });

  test('renders h1 heading with correct text', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('School dashboard');
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
