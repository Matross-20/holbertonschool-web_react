import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css'

function CourseList({ listCourses }) {
    let content;

    if (listCourses.length === 0) content = <CourseListRow textFirstCell='No course available yet' isHeader={false} />;
    else {
        content = listCourses.map((course) =>
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
        );
    }

    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};

export default CourseList;
