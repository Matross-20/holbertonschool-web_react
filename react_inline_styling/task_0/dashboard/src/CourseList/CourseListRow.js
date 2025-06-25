import React from "react"
import './CourseList.css'
import PropTypes from 'prop-types'

const HEADER_COLOR = "#deb5b545"
const ROW_COLOR = "#f5f5f5ab"

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return  <tr>
                        <th style={{backgroundColor: HEADER_COLOR}} colSpan={2}>{textFirstCell}</th>
                    </tr>
            
        } else {
            return  <tr>
                        <th style={{backgroundColor: HEADER_COLOR}}>{textFirstCell}</th>
                        <th style={{backgroundColor: HEADER_COLOR}}>{textSecondCell}</th>
                    </tr>
        }
    } else {
        return  <tr>
                    <td style={{backgroundColor: ROW_COLOR}}>{textFirstCell}</td>
                    <td style={{backgroundColor: ROW_COLOR}}>{textSecondCell}</td>
                </tr>
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};