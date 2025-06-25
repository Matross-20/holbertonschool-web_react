import { render, screen, within } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Header is True", () => {
  it("should render one columnheader with colspan = 2 if textSecondCell is null", () => {
    render(
      <CourseListRow
        isHeader={true}
        textSecondCell={null}
        textFirstCell="Test course list row"
      />
    );

    const thElement = screen.getByRole("columnheader", {
      name: "Test course list row",
    });

    expect(thElement).toBeInTheDocument();
    expect(thElement.tagName).toBe("TH");
    expect(thElement).toHaveAttribute("colspan", "2");
  });

  it("should render two th elements if textSecondCell is not null", () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="First"
        textSecondCell="Second"
      />
    );

    const thElements = screen.getAllByRole("columnheader");
    expect(thElements).toHaveLength(2);
    expect(thElements[0]).toHaveTextContent("First");
    expect(thElements[1]).toHaveTextContent("Second");
  });
});

describe("CourseListRow Header is False", () => {
  it("should render two td elements in a tr element", () => {
    render(
      <CourseListRow
        isHeader={false}
        textFirstCell="Cell 1"
        textSecondCell="Cell 2"
      />
    );

    const trElement = screen.getByRole("row");
    const tdElements = within(trElement).getAllByRole("cell");

    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
    expect(tdElements[0]).toHaveTextContent("Cell 1");
    expect(tdElements[1]).toHaveTextContent("Cell 2");
  });
});