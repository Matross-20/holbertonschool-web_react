import React from 'react';
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite';

export default function CourseList(props) {
    const { listCourses } = props
    return (
        <div className={css(styles.bodyHeight)}>
        {listCourses.length === 0 ? (
            <p>No course available yet</p>
        ):(
            <table className={css(styles.tableContainer)}>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {listCourses.map((course) => <CourseListRow 
                        key={course.id} 
                        isHeader={false} 
                        textFirstCell={course.name} 
                        textSecondCell={course.credit} />)}
                </tbody>
            </table>
        )}
        </div>
    )
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};

const styles = StyleSheet.create({
    bodyHeight: {
        height: "70%",
    },

    tableContainer: {
      width: "80%",
      margin: "0 auto",
      marginTop: "20px",
      border: "2px solid rgba(0, 0, 0, 0.2)",
    },
  });
  