import React from "react";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from 'aphrodite';
import CourseShape from "./CourseShape";
import PropTypes from 'prop-types';


function CourseList({listCourses}) {
    return (
        <table className={css(styles.courseList)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
                
                {listCourses.length === 0 && 
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                }

                {listCourses.map((course) => (
                    <CourseListRow
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit}
                    isHeader={false}
                    />
                ))}
            </tbody>
        </table>
    )
}

const styles = StyleSheet.create({
    courseList: {
        marginTop: 40,
        border: '1px solid rgb(170, 170, 170)',
        borderCollapse: 'collapse',
        width: '95%'
    },
    
})

CourseList.defaultProps = {
    listCourses: []
}
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;