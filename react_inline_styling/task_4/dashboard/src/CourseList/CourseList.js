import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  noCourseRow: {
    backgroundColor: '#f5f5f5ab',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)} id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} className={css(styles.noCourseRow)} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
