import React from "react";
import { render, screen, cleanup, afterEach, describe, test, expect } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "../App";

const mockStore = configureStore([]);

afterEach(() => {
  cleanup();
});

describe("App Component", () => {
  test("renders Login component when isLoggedIn is false", () => {
    const store = mockStore({ auth: { isLoggedIn: false } });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("renders CourseList component when isLoggedIn is true", () => {
    const store = mockStore({ auth: { isLoggedIn: true } });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Course List/i)).toBeInTheDocument();
  });
});