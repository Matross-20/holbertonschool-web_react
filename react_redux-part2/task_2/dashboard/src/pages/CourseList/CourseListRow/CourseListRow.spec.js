import { render, screen, fireEvent, test, expect } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer, { selectCourse, unSelectCourse } from '../../../features/courses/coursesSlice.js';
import CourseListRow from './CourseListRow';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

test('should render a course row and allow selection', () => {
  const course = { id: '1', name: 'Course 1', credits: 3, isSelected: false };

  render(
    <Provider store={store}>
      <CourseListRow course={course} />
    </Provider>
  );

  const checkbox = screen.getByLabelText(/Course 1/i);
  expect(checkbox).not.toBeChecked();

  // Check the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // Uncheck the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});