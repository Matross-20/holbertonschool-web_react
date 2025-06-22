import React from "react";
import './CourseList.css'
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";

const CourseList = ({ listCourses }) => {
    return (
        <table id="CourseList">
            <caption><CourseListRow textFirstCell="Available courses"/></caption>
            <thead><tr id="head-table"><CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} /></tr></thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <tr><CourseListRow textFirstCell="No course available yet"/></tr>
                ) : (
                    listCourses.map(course => ( <tr key={course.id}> <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} /></tr>
                    ))
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