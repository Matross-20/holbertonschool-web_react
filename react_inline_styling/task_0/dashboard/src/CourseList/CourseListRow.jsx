import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const isHeaderColor = { backgroundColor: "#deb5b545" }
  const cellColor = { backgroundColor: "#f5f5f5ab" }
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={isHeaderColor} colSpan="2">{textFirstCell}</th>
      ) : (
        <>
          <th style={cellColor}>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
  
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;