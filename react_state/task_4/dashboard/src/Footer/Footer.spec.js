import { render, screen } from "@testing-library/react";
import newContext from "../Context/context";
import * as utils from "../utils/utils";
import Footer from "./Footer";

describe("Footer component", () => {
  let mockGetFooterCopy = null;
  
  const mockContextLoggedOut = {
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
    logOut: jest.fn(),
  };

  const mockContextLoggedIn = {
    user: {
      email: 'test@test.com',
      password: 'password123',
      isLoggedIn: true,
    },
    logOut: jest.fn(),
  };

  beforeEach(() => {
    mockGetFooterCopy = jest
      .spyOn(utils, "getFooterCopy")
      .mockReturnValue("Holberton School");
  });

  afterEach(() => {
    if (mockGetFooterCopy) {
      mockGetFooterCopy.mockRestore();
    }
  });

  //   Check text in footer has correct test when getFooterCopy arg is true
  it("Has correct text", () => {
    render(
      <newContext.Provider value={mockContextLoggedOut}>
        <Footer />
      </newContext.Provider>
    );
    
    const FooterText = screen.getByText(/Copyright 2025 - holberton School/i);
    expect(FooterText).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(
      <newContext.Provider value={mockContextLoggedOut}>
        <Footer />
      </newContext.Provider>
    );
  });

  it("does not display Contact us link when user is logged out", () => {
    render(
      <newContext.Provider value={mockContextLoggedOut}>
        <Footer />
      </newContext.Provider>
    );
    
    expect(screen.queryByText("Contact us")).not.toBeInTheDocument();
  });

  it("displays Contact us link when user is logged in", () => {
    render(
      <newContext.Provider value={mockContextLoggedIn}>
        <Footer />
      </newContext.Provider>
    );
    
    expect(screen.getByText("Contact us")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact us" })).toBeInTheDocument();
  });
});