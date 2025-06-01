import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StyleSheetTestUtils } from 'aphrodite';
import App from "./App";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

global.alert = jest.fn();

// Mock console.log to test logging
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe("App Component", () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    // Render app component
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  // Test if app component renders Header component
  it.skip("Renders Header component", () => {
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
  });

  it("has correct initial state - shows login form when not logged in", () => {
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  it("logOut function updates state correctly with keyboard shortcut", async () => {
    const user = userEvent.setup();
    
    // Test the keyboard shortcut for logout
    await user.keyboard('{Control>}h{/Control}');
    
    // Should show alert and remain logged out
    expect(global.alert).toHaveBeenCalledWith("Logging you out");
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  it("markNotificationAsRead removes notification and logs message", async () => {
    const user = userEvent.setup();
    
    // Open notifications drawer
    const notificationButton = screen.getByTestId('displayBtn');
    await user.click(notificationButton);
    
    // Get initial notification count
    const initialNotifications = screen.getAllByRole('listitem');
    const initialCount = initialNotifications.length;
    expect(initialCount).toBeGreaterThan(0);
    
    // Find and click the first notification item (assuming it has a close button or is clickable)
    const firstNotification = initialNotifications[0];
    await user.click(firstNotification);
    
    // Check that console.log was called with expected message
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Notification \d+ has been marked as read/));
  });

  it("clicking on notification item removes it from notification list", async () => {
    const user = userEvent.setup();
    
    // Open notifications drawer
    const notificationButton = screen.getByTestId('displayBtn');
    await user.click(notificationButton);
    
    // Get initial notification count
    const initialNotifications = screen.getAllByRole('listitem');
    const initialCount = initialNotifications.length;
    expect(initialCount).toBeGreaterThan(0);
    
    // Click on the first notification to remove it
    const firstNotification = initialNotifications[0];
    await user.click(firstNotification);
    
    // Check that notification count decreased
    const remainingNotifications = screen.getAllByRole('listitem');
    expect(remainingNotifications.length).toBe(initialCount - 1);
  });

  it("displays drawer when notification title is clicked", async () => {
    const user = userEvent.setup();
    
    // Initially drawer should not be visible
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
    
    // Click to show drawer
    const showButton = screen.getByTestId('displayBtn');
    await user.click(showButton);
    
    // Now drawer should be visible
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it("hides drawer when close button is clicked", async () => {
    const user = userEvent.setup();
    
    // Show drawer first
    const showButton = screen.getByTestId('displayBtn');
    await user.click(showButton);
    
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    
    // Hide drawer
    const hideButton = screen.getByTestId('hideBtn');
    await user.click(hideButton);
    
    // Drawer should be hidden
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
  });
});