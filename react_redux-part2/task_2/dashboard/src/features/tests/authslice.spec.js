import authReducer from "../auth/authSlice";
import { login, logout } from "../auth/authSlice";
import { describe, it, expect } from "@jest/globals";

describe("authSlice", () => {
  it("should return the initial state", () => {
    const initialState = {
      user: { email: "", password: "" },
      isLoggedIn: false,
    };
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle login", () => {
    const previousState = {
      user: { email: "", password: "" },
      isLoggedIn: false,
    };
    const action = login({ email: "test@example.com", password: "password123" });
    const newState = authReducer(previousState, action);

    expect(newState.user.email).toBe("test@example.com");
    expect(newState.user.password).toBe("password123");
    expect(newState.isLoggedIn).toBe(true);
  });

  it("should handle logout", () => {
    const previousState = {
      user: { email: "test@example.com", password: "password123" },
      isLoggedIn: true,
    };
    const newState = authReducer(previousState, logout());

    expect(newState.user.email).toBe("");
    expect(newState.user.password).toBe("");
    expect(newState.isLoggedIn).toBe(false);
  });
});