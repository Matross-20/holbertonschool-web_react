import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    <table className={css(styles.border)}>
      <thead className={css(styles.th)}>
        <CourseListRow  isHeader={true} textFirstCell="Available courses" />
        <CourseListRow 
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody className={css(styles.td)}>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course availble yet" />
        ) : (
          courses.map((course) => (
            <CourseListRow
              
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  border: {
    borderCollapse: 'collapse',
    width: '100%'
  },

  th: {
    border: '1px solid',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  td: {
    border: '1px solid'
  }
});

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default WithLogging(CourseList);
