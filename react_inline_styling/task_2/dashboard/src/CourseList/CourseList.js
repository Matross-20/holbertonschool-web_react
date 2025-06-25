import React from 'react'
import CourseListRow  from './CourseListRow'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    table: {
       padding: '0px',
       width: '90%',
       margin: '50px',
       border: '2px solid rgb(229, 228, 228)',
       borderRadius: '2px',
    },
    theadTh: {
       borderBottom: '2px solid rgb(229, 228, 228)',
    },
    theadTrSecondChild: {
       textAlign: 'left',
    },
    tbody: {
       fontWeight: '500',
       textAlign: 'left',
    },
   });
   

export default function CourseList( {listCourses = []}) {
    return  <table className={css(styles.table)}>
        <thead>
            <CourseListRow className={css(styles.theadTh)} textFirstCell={"Available courses"} isHeader={true}/>
            <CourseListRow className={css(styles.theadTrSecondChild)} textFirstCell={"Course name"} textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody className={css(styles.tbody)}>
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
