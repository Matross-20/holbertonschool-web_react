import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  // Check whether the li element has the color blue if type is default
  it("Color is blue when type is default", () => {
    // Props
    const type = "default";
    const value = "New course available";

    render(<NotificationItem type={type} value={value} />);

    // Get list element
    const listElement = screen.getByRole("listitem");

    // Assert that list text is blue
    expect(listElement).toHaveStyle({ color: "blue" });

    // Assert if type value is equal to default
    expect(listElement).toHaveAttribute("data-notification-type", "default");
  });

  // Check whether the li element has the color red if type is urgent
  it("Color is red when type is urgent", () => {
    // Props
    const type = "urgent";
    const value = "New resume available";

    render(<NotificationItem type={type} value={value} />);

    // Get list element
    const listElement = screen.getByRole("listitem");

    // Assert that list text is red
    expect(listElement).toHaveStyle({ color: "red" });

    // Assert if type value is equal to default
    expect(listElement).toHaveAttribute("data-notification-type", "urgent");
  });

  // Test whether markAsRead prop gets called when onclickEvent is triggered
  it("markAsRead is called when onclick is triggered", async () => {
    
    // Props
    const type = "urgent";
    const value = "New resume available";
    
    // Mock
    markAsReadMock = jest.fn();
    
    render(<NotificationItem type={type} value={value} markAsRead={markAsReadMock} id={2}/>)

    // Get list element
    const listElement = screen.getByTestId("item2")

    // Simulate click on listElemnt
    await userEvent.click(listElement);
    
    // Asswert that markAsRead is called once
    expect(markAsReadMock).toHaveBeenCalledTimes(1);


  });
});
