import { StyleSheet, css } from 'aphrodite';
const backgroundColorth = { backgroundColor: '#deb5b545'};
const backgroundColortr = { backgroundColor: '#f5f5f5ab'};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
  }
  })

function CourseListRow({isHeader, textFirstCell, textSecondCell}){
        if (isHeader) {
            if (textFirstCell === null){
                return (
                    <tr style={backgroundColortr}>
                        <th colSpan = {2} style={backgroundColorth}>{textFirstCell}</th>
                    </tr>
                )
            }
            else {
                return (
                    <tr style={backgroundColortr}>
                        <th style={backgroundColorth}>{textFirstCell}</th>
                        <th style={backgroundColorth}>{textSecondCell}</th>
                    </tr>
                )
            }
        }
        else {
            <tr style={backgroundColortr}>
                <th style={backgroundColorth}>{textFirstCell}</th>
                <th style={backgroundColorth}>{textSecondCell}</th>
            </tr>
        }
}

CourseListRow.propTypes = {
    textSecondCell : oneOfType([string, number]),
  };
export default CourseListRow;
