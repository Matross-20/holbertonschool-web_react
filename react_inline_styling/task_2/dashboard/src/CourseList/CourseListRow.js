import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545', 
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab', 
  },
  th: {
    
  },
});

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  const rowStyle = css(isHeader ? styles.header : styles.defaultRow);

  return (
    <tr className={rowStyle}>
      {isHeader ? (
        <>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};


CourseListRow.propTypes = {

  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isHeader: PropTypes.bool,
};

CourseListRow.defaultProps = {
  isHeader: false,
};

export default CourseListRow;

