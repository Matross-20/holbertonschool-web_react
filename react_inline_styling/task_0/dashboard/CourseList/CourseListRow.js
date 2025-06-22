import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowBackgroundStyle = isHeader ? headerRowStyle : rowStyle;

  return (
    <tr style={rowBackgroundStyle}>
      {isHeader && !textSecondCell && (
        <th colSpan="2">{textFirstCell}</th>
      )}
      {isHeader && textSecondCell && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  textSecondCell: null,
};

export default CourseListRow;
