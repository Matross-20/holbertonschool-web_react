import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

function Courselist({ courses = [] }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    marginTop: "2rem",

    th: {
      border: "1px solid #ccc",
      padding: "10px",
    },

    td: {
      border: "1px solid #ccc",
      padding: "10px",
    },
  },
});

Courselist.propTypes = {
  courses: PropTypes.array,
};

export default Courselist;