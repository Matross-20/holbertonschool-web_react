import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse, unSelectCourse } from './coursesSlice';
import WithLogging from '../../hoc/WithLogging';
import './CourseList.css';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

  return (
    <div className="course-list">
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.credits}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={course.isSelected || false}
                    onChange={(e) => onChangeRow(course.id, e.target.checked)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const WrappedCourseList = WithLogging(CourseList);
export default WrappedCourseList;