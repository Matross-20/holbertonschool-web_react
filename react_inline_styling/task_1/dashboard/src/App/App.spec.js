import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);

    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Available courses/i)).not.toBeInTheDocument();
  });

  test('renders CourseList component when isLoggedIn is true', () => {
    render(<App isLoggedIn={false} />);

    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Login to access the full dashboard/i)
    ).not.toBeInTheDocument();
  });

  it('displays the title Course list above the CourseList component when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/Course list/i)).toBeInTheDocument();
    expect(screen.getByText(/ES6/i)).toBeInTheDocument(); // Verifies CourseList is rendered
  });

  it('displays the title Log in to continue above the Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it('displays News from the School and a paragraph with Holberton School News goes here', () => {
    render(<App />);
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Holberton School News goes here/i)
    ).toBeInTheDocument();
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
