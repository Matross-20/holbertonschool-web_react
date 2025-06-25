import React from 'react'
import CourseListRow  from './CourseListRow'
import './CourseList.css'

export default function CourseList( {listCourses = []}) {
    return  <table>
        <thead>
            <CourseListRow textFirstCell={"Available courses"} isHeader={true}/>
            <CourseListRow textFirstCell={"Course name"} textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
            {listCourses.length > 0 ? listCourses.map((course) => {
                    return (<CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit.toString()}
                        isHeader={false}
                    />
                    )
                }) : (
                    <CourseListRow textFirstCell={"No course available yet"} isHeader={false} />
                )}
        </tbody>
    </table>
}
