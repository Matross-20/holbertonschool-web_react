import React from 'react';
import { useSelector } from 'react-redux';
import WithLogging from '../../hoc/WithLogging';
import './CourseList.css';

const CourseList = () => {
  const courses = useSelector((state) => state.courses);

  return (
    <div className="course-list">
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.credits}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const WrappedCourList = WithLogging(CourseList);
export default WrappedCourList;