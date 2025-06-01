import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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

  // Test if displayDrawer is called on Menu click
  it("Menu Click calls handleDisplayDrawer", async () => {

    // Spy on handleDisplayDrawer
    const handleDisplayMock = jest.fn() 

    render(<Notifications notifications={notificationsList} isDrawerDisplayed={false} showDrawer={handleDisplayMock}/>);

    // Get Menu button
    const menuButton = screen.getByTestId(/displayBtn/i);

    // Simulate button click
    await userEvent.click(menuButton);

    // Assert if handleDisplay gets called
    expect(handleDisplayMock).toHaveBeenCalled();
  })

  // Test if displayDrawer is called on Menu click
  it("Menu Click calls handleHideDrawer", async () => {

    // Spy on handleHideDrawer
    const handleHideMock = jest.fn() 

    render(<Notifications notifications={notificationsList} isDrawerDisplayed={true} hideDrawer={handleHideMock}/>);

    // Get Menu button
    const hideButton = screen.getByTestId(/hideBtn/i);

    // Simulate button click
    await userEvent.click(hideButton);

    // Assert if handleDisplay gets called
    expect(handleHideMock).toHaveBeenCalled();
  })

});
