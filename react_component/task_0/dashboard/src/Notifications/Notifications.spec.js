import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notification Component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  beforeEach(() => {
    render(
      <Notifications notifications={notificationsList} displayDrawer={true} />
    );
  });

  test("Has title", () => {
    // Get tile
    const titleElement = screen.getByText(/Here is the list of notifications/i);

    //assert existance of title
    expect(titleElement).toBeInTheDocument();
  });

  test("Contains button", () => {
    // Get tile
    const buttonElement = screen.getByRole("button");

    //assert existance of button
    expect(buttonElement).toBeInTheDocument();
  });

  test("Contains 3 li elements", () => {
    // Get tile
    const listElements = screen.getAllByRole("listitem");

    //assert number of li elements
    expect(listElements.length).toBe(3);

    //assert values of li elements
    expect(listElements[0].textContent).toMatch(/New course available/i);
    expect(listElements[1].textContent).toMatch(/New resume available/i);
    expect(listElements[2].textContent).toMatch(
      /Urgent requirement - complete by EOD/i
    );
  });

  test("Close button logs message", () => {
    cleanup();

    // Spy on console.log
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Render component
    render(
      <Notifications
        displayDrawer={true}
        notificationsArray={notificationsList}
      />
    );

    // Simulate click
    fireEvent.click(screen.getByRole("button", { name: /Close/i }));

    //assert message logged when button is clicked
    expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");

    // Clean up
    logSpy.mockRestore();
  });

  // Test if some elements are not displayed when displayDrawer is false
  it("Elements not displayed when displayDrawer is false", () => {
    cleanup();

    // Render Notifications component
    render(<Notifications notifications={notificationsList} />);

    // Get p element(s)
    const textElement = screen.queryByRole("paragraph");
    const buttonElement = screen.queryByRole("button");

    // Assert if there are no p graphs in the component
    expect(textElement).not.toBeInTheDocument();
    expect(buttonElement).not.toBeInTheDocument();
  });

  // Test when displayDrawer is true and notifications list is empty
  it("Notifications list is empty", () => {
    cleanup();

    // Render Notifications component
    render(<Notifications displayDrawer={true} />);

    // Get No new notifications text
    const noNotifications = screen.getByText(/No new notification for now/i);

    // Assert if noNotifications text is present
    expect(noNotifications).toBeInTheDocument();
  });
});
