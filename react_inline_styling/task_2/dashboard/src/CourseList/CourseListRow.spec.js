import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow.jsx';

describe('CourseListRow Component', () => {
  test('renders one column header with colspan=2 when isHeader is true and textSecondCell is null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Test Header" />);
    const th = screen.getByText('Test Header');
    expect(th).toBeInTheDocument();
    expect(th).toHaveAttribute('colspan', '2');
  });

  test('renders two <th> elements when isHeader is true and textSecondCell is provided', () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveTextContent('Header 1');
    expect(headers[1]).toHaveTextContent('Header 2');
  });

  test('renders two <td> elements when isHeader is false', () => {
    render(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('Data 1');
    expect(cells[1]).toHaveTextContent('Data 2');
  });

  test('check the cell color is #deb5b545, when isHeader is true', () => {
    expect();
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
