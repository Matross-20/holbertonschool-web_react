import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return ( 
    <>
      <table id='CourseList' className={css(styles.CourseList)}>
        <thead> 
          <CourseListRow textFirstCell="Available courses" isHeader={ true } />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
        </thead> 
        <tbody> 
          { listCourses.length === 0 
            ? <CourseListRow textFirstCell="No course available yet" isHeader={ false } />
            : listCourses.map((course) => (
                <CourseListRow 
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                  isHeader={false}
                />
	      ))
          }	
        </tbody>   
      </table>
    </>
  );
}

CourseList.prototype = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

const styles = StyleSheet.create({

  CourseList: {
    marginTop: "40px",
    border: "1px solid rgb(170, 170, 170)",
    borderCollapse: "collapse",
    width: "95%",
  },

})


export default CourseList
