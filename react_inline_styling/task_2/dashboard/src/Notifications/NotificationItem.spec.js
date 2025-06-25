import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("should render data-notification-type='default' when type is default", () => {
    render(<NotificationItem type="default" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "default");
  });

  it("should render data-notification-type='urgent' when type is urgent", () => {
    render(<NotificationItem type="urgent" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "urgent");
  });

  it("should call markAsRead once when clicked", () => {
    const handleClick = jest.fn();
    render(
      <NotificationItem
        type="default"
        value="Test notification"
        markAsRead={handleClick}
      />
    );

    fireEvent.click(screen.getByText("Test notification"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});