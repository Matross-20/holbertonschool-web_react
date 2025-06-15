import { render, screen, fireEvent, test, expect } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import CourseList from './CourseList';
import { fetchCourses } from './coursesSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

test('should render courses and allow selection', async () => {
  const mockCourses = [
    { id: '1', name: 'Course 1', credits: 3, isSelected: false },
    { id: '2', name: 'Course 2', credits: 4, isSelected: false },
  ];

  store.dispatch(fetchCourses.fulfilled(mockCourses));

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  const checkbox1 = screen.getByLabelText(/Course 1/i);
  const checkbox2 = screen.getByLabelText(/Course 2/i);

  expect(checkbox1).not.toBeChecked();
  expect(checkbox2).not.toBeChecked();

  fireEvent.click(checkbox1);
  expect(checkbox1).toBeChecked();

  fireEvent.click(checkbox1);
  expect(checkbox1).not.toBeChecked();
});