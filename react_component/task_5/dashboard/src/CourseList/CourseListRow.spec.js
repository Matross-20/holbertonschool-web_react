import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

// Test suite for CourseListRow component
describe("Test CourseListRow Component", () => {
  // If isHeader is true
  // Test if one column header is rendered when textSecondSell is null

  it.skip("One column header is rendered", () => {
    render(
      <table>
        <thead>
          <CourseListRow isHeader={true} textFirstCell={"Khiba Koenane"} />
        </thead>
      </table>
    );

    // Get tableHeader
    const tableHeader = screen.getByRole("columnheader");

    // Assert existance of table header
    expect(tableHeader).toBeInTheDocument();

    // Assert value of table header colspan
    expect(tableHeader).toHaveAttribute("colSpan", "2");
  });

  // Test if two column headers are rendered when textSecondSell not null

  it("Two column headers are rendered", () => {
    render(
      <table>
        <thead>
          <CourseListRow
            isHeader={true}
            textFirstCell={"Khiba"}
            textSecondCell={"Koenane"}
          />
        </thead>
      </table>
    );

    // Get tableHeader
    const tableHeaders = screen.getAllByRole("columnheader");

    // Assert existance of table header
    expect(tableHeaders.length).toBe(2);
  });

  //   If isHeader is false
  // Test if two td elements are rendered
  it("Two td elements are rendered", () => {
    render(
      <table>
        <tbody>
          <CourseListRow textFirstCell={"Khiba"} textSecondCell={"Koenane"} />
        </tbody>
      </table>
    );

    // Get table data elements
    const tableElements = screen.getAllByRole("cell");

    // Assert existance of two td elements
    expect(tableElements.length).toBe(2);
  });
});
