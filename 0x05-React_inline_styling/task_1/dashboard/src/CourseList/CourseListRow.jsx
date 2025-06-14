import React from 'react'
import "./CourseList.css"

const CourseListRow = ({ isHeader = false, textFirstCell = '', textSecondCell = null }) => {
    return (
        <tr>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={{ backgroundColor: "#deb5b545" }} className='table-cell' colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className='table-cell' >{textFirstCell}</th>
                        <th style={{ backgroundColor: "#deb5b545" }} className='table-cell'>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td style={{ backgroundColor: "#f5f5f5ab" }} className='table-cell'>{textFirstCell}</td>
                    <td className='table-cell' >{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}

export default CourseListRow
