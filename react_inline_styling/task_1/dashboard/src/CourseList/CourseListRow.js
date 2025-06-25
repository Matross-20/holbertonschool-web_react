import React from "react"
import PropTypes from 'prop-types'

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return  <tr>
                        <th style={{backgroundColor: "#deb5b545"}} colSpan={2}>{textFirstCell}</th>
                    </tr>
            
        } else {
            return  <tr>
                        <th style={{backgroundColor: "#deb5b545"}}>{textFirstCell}</th>
                        <th style={{backgroundColor: "#deb5b545"}}>{textSecondCell}</th>
                    </tr>
        }
    } else {
        return  <tr>
                    <td style={{backgroundColor: "#f5f5f5ab"}}>{textFirstCell}</td>
                    <td style={{backgroundColor: "#f5f5f5ab"}}>{textSecondCell}</td>
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