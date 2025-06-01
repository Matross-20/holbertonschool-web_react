import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StyleSheetTestUtils } from 'aphrodite';
import newContext from '../Context/context';
import Header from "./Header";

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
  
afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header Component", () => {
  // Test with default context value (not logged in)
  it("Renders correct text and image with default context", () => {
    render(<Header />);
    
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });
    const image = screen.getByAltText(/holberton logo/i);
    
    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  // Test that logoutSection is NOT rendered with default context
  it("Does not render logoutSection with default context", () => {
    render(<Header />);
    
    const logoutSection = screen.queryByText(/Welcome/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  // Test that logoutSection IS rendered when user is logged in
  it("Renders logoutSection when user is logged in", () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    render(
      <newContext.Provider value={contextValue}>
        <Header />
      </newContext.Provider>
    );

    const logoutSection = screen.getByText(/Welcome test@example.com/i);
    const logoutLink = screen.getByText(/logout/i);
    
    expect(logoutSection).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  // Test that clicking logout calls the logOut function
  it("Calls logOut function when logout link is clicked", async () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };

    render(
      <newContext.Provider value={contextValue}>
        <Header />
      </newContext.Provider>
    );

    const logoutLink = screen.getByText(/logout/i);
    await userEvent.click(logoutLink);
    
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });

  // Test that logoutSection has correct id attribute
  it("LogoutSection has correct id attribute", () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    render(
      <newContext.Provider value={contextValue}>
        <Header />
      </newContext.Provider>
    );

    const logoutSection = document.getElementById('logoutSection');
    expect(logoutSection).toBeInTheDocument();
  });
});