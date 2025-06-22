import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  test('renders 1 rows when given an empty array', () => {
    render(<CourseList courses={[]} />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });

  test('renders 1 row when given an empty array', () => {
    render(<CourseList courses={[]} />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
