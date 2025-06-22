import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    body:{
        'display':'unset',
    }
})

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    if (isHeader){
        return (
            <tr style={{backgroundColor: '#deb5b545'}}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>
        );
    }
    else{
        return (
            <tr style={{backgroundColor: '#f5f5f5ab'}}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;