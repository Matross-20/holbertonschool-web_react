import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    'table':{
        border: '2px solid gray',
    },
    '#CourseList':{
        'width': '100%',
        'text-align': 'left',
        'border': '2px solid gray',
        'border-collapse': 'collapse',
    },
    '#CourseList caption': {
        'font-size': '18px',
        'border': '2px solid gray',
        'border-bottom': '0',
        'padding': '10px',
    },
    '#CourseList tbody':{
        'padding': '10px',
        'border-top': '2px solid gray',
    },
    'th':{
        'padding': '10px',
    },
    'td':{
        'padding': '10px',
    },
    'th':{
        'font-size': '17px',
    }
})

const CourseList = ({ listCourses }) => {
    return (
        <table className={css(styles.courseList)} id="CourseList">
            <caption className={css(styles.caption)}><CourseListRow textFirstCell="Available courses" /></caption>
            <thead><CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} /></thead>
            <tbody className={css(styles.tbody)}>
                {listCourses && listCourses.length > 0 ? (
                    listCourses.map(course => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
                    ))
                ) : (
                    <tr>
                        <CourseListRow textFirstCell="No course available yet" />
                    </tr>
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired,
    })),
};

export default CourseList;