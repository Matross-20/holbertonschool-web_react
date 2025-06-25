import React from "react"
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    defaultRow: {
       backgroundColor: '#f5f5f5ab',
    },
    headerRow: {
       backgroundColor: '#deb5b545',
    },
    thDefault: {
       backgroundColor: '#deb5b545',
    },
    thColSpan: {
       backgroundColor: '#deb5b545',
       colSpan: '2',
    },
   });
   

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return  <tr className={css(styles.headerRow)}>
                        <th className={css(styles.thDefault)} colSpan={2}>{textFirstCell}</th>
                    </tr>
            
        } else {
            return <tr className={css(styles.headerRow)}>
                        <th className={css(styles.thDefault)}>{textFirstCell}</th>
                        <th className={css(styles.thDefault)}>{textSecondCell}</th>
                    </tr>
        }
    } else {
        return <tr className={css(styles.defaultRow)}>
                    <td className={css(styles.defaultRow)}>{textFirstCell}</td>
                    <td className={css(styles.defaultRow)}>{textSecondCell}</td>
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