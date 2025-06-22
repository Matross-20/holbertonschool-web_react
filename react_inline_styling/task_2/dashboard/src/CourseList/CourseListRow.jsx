import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css} from 'aphrodite';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr className={isHeader ? css(styles.headerRow) : css(styles.defaultRow)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.headerRow)}>{textFirstCell}</th>
      ) : (
        <>
          <th className={css(styles.defaultRow)}>{textFirstCell}</th>
          <th className={css(styles.defaultRow)}>{textSecondCell}</th>
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

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545'
  },

  defaultRow: {
    backgroundColor: '#f5f5f5ab'
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;