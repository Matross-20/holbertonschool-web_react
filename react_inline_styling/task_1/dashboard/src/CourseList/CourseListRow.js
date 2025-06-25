import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;
  const rowStyle = {
    backgroundColor: '#f5f5f5ab'
  };

  const headerStyle = {
    backgroundColor: '#deb5b545',
  };

  if (isHeader === true) {
    if (textSecondCell === null) {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = (
        <>
          <th style={headerStyle}>{textFirstCell}</th>
          <th style={headerStyle}>{textSecondCell}</th>
        </>
      );
    }
  } else if (isHeader === false) {
    element = (
      <>
        <td style={rowStyle}>{textFirstCell}</td>
        <td style={rowStyle}>{textSecondCell}</td>
      </>
    );
  }

  return <tr>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;