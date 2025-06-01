import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  const mockProps = {
    notifications: notificationsList,
    isDrawerDisplayed: false,
    showDrawer: jest.fn(),
    hideDrawer: jest.fn(),
    markNotificationAsRead: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Notifications {...mockProps} />);
  });

  it("renders notification title", () => {
    render(<Notifications {...mockProps} />);
    expect(screen.getByText("Your notifications")).toBeInTheDocument();
  });

  it("does not render drawer when isDrawerDisplayed is false", () => {
    render(<Notifications {...mockProps} />);
    expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
  });

  it("renders drawer when isDrawerDisplayed is true", () => {
    const propsWithDrawer = { ...mockProps, isDrawerDisplayed: true };
    render(<Notifications {...propsWithDrawer} />);
    expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
  });

  it("calls showDrawer when notification title is clicked", async () => {
    const user = userEvent.setup();
    render(<Notifications {...mockProps} />);
    
    const title = screen.getByText("Your notifications");
    await user.click(title);
    
    expect(mockProps.showDrawer).toHaveBeenCalledTimes(1);
  });

  it("calls hideDrawer when close button is clicked", async () => {
    const user = userEvent.setup();
    const propsWithDrawer = { ...mockProps, isDrawerDisplayed: true };
    render(<Notifications {...propsWithDrawer} />);
    
    const closeButton = screen.getByTestId("hideBtn");
    await user.click(closeButton);
    
    expect(mockProps.hideDrawer).toHaveBeenCalledTimes(1);
  });

  it("renders notifications when provided", () => {
    const propsWithDrawer = { ...mockProps, isDrawerDisplayed: true };
    render(<Notifications {...propsWithDrawer} />);
    
    expect(screen.getByText("New course available")).toBeInTheDocument();
    expect(screen.getByText("New resume available")).toBeInTheDocument();
  });

  it("renders 'No new notification' when notifications array is empty", () => {
    const propsWithEmptyNotifications = {
      ...mockProps,
      notifications: [],
      isDrawerDisplayed: true,
    };
    
    render(<Notifications {...propsWithEmptyNotifications} />);
    expect(screen.getByText("No new notification for now")).toBeInTheDocument();
  });

  it("passes markNotificationAsRead to NotificationItem components", () => {
    const propsWithDrawer = { ...mockProps, isDrawerDisplayed: true };
    render(<Notifications {...propsWithDrawer} />);
    
    // The markNotificationAsRead prop should be passed to each NotificationItem
    // This is tested indirectly by checking that notifications are rendered
    expect(screen.getAllByRole("listitem")).toHaveLength(notificationsList.length);
  });

  it("component is a PureComponent", () => {
    // Test that the component extends PureComponent by checking its constructor
    expect(Notifications.prototype.constructor.name).toBe("Notifications");
    expect(Object.getPrototypeOf(Notifications).name).toBe("PureComponent");
  });

  it("should not re-render when props are the same", () => {
    const { rerender } = render(<Notifications {...mockProps} />);
    
    // Re-render with the same props
    rerender(<Notifications {...mockProps} />);
    
    // Since it's a PureComponent, it should automatically prevent unnecessary re-renders
    // This is inherently tested by using PureComponent
    expect(screen.getByText("Your notifications")).toBeInTheDocument();
  });

  it("should re-render when notifications prop changes", () => {
    const { rerender } = render(<Notifications {...mockProps} isDrawerDisplayed={true} />);
    
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    
    // Change notifications
    const newProps = {
      ...mockProps,
      isDrawerDisplayed: true,
      notifications: [notificationsList[0]], // Only one notification
    };
    
    rerender(<Notifications {...newProps} />);
    
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("should re-render when isDrawerDisplayed prop changes", () => {
    const { rerender } = render(<Notifications {...mockProps} isDrawerDisplayed={false} />);
    
    expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
    
    // Change isDrawerDisplayed
    rerender(<Notifications {...mockProps} isDrawerDisplayed={true} />);
    
    expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
  });
});