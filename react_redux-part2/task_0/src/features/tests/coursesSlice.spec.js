import coursesReducer, { fetchCourses } from "../courses/coursesSlice";
import { configureStore, beforeAll, afterEach, afterAll, describe, it, expect } from "@reduxjs/toolkit";
import { rest } from "msw";
import { setupServer } from "msw/node";

const API_BASE_URL = "http://localhost:5173";
const mockCourses = [{ id: 1, name: "React Basics" }, { id: 2, name: "Redux Fundamentals" }];

// Mock API server
const server = setupServer(
  rest.get(`${API_BASE_URL}/courses.json`, (req, res, ctx) => {
    return res(ctx.json(mockCourses));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("coursesSlice", () => {
  it("should return the initial state", () => {
    expect(coursesReducer(undefined, {})).toEqual({ courses: [] });
  });

  it("should fetch and update courses data", async () => {
    const store = configureStore({ reducer: coursesReducer });
    await store.dispatch(fetchCourses());
    expect(store.getState().courses).toEqual(mockCourses);
  });

  it("should reset courses on logout", () => {
    const prevState = { courses: mockCourses };
    const nextState = coursesReducer(prevState, { type: "auth/logout" });
    expect(nextState).toEqual({ courses: [] });
  });
});