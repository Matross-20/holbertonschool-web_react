import CourseListRow from "./CourseListRow";

function CourseList(){
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
            {listCourses ? (
                <tr>No course available yet</tr>
            ) : (
                listCourses.map(item => (
                    <CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit}/>
      ))
)}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(shape(CourseShape)).isRequired,
  };

CourseList.defaultProps = {
    listCourses: [],
 };
export default CourseList;
