import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "../notifications/notificationsSlice";
import { getLatestNotification } from "../../utils/utils";
import { describe, it, expect, beforeEach, afterEach, jest } from "@jest/globals";

beforeEach(() => {
  globalThis.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, message: "Mensaje 1" },
        { id: 2, message: "Mensaje 2" },
        { id: 3, message: "Mensaje 3" },
      ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("notificationsSlice", () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it("Debe retornar el estado inicial por defecto", () => {
    expect(notificationsReducer(undefined, {})).toEqual(initialState);
  });

  it("Debe manejar el fetchNotifications correctamente", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const result = await fetchNotifications()(dispatch, getState, {});

    const updatedData = [
      { id: 1, message: "Mensaje 1" },
      { id: 2, message: "Mensaje 2" },
      { id: 3, message: getLatestNotification() },
    ];

    expect(result.payload).toEqual(updatedData);
  });

  it("Debe eliminar una notificación correctamente", () => {
    const prevState = {
      notifications: [
        { id: 1, message: "Mensaje 1" },
        { id: 2, message: "Mensaje 2" },
      ],
      displayDrawer: true,
    };

    const nextState = notificationsReducer(
      prevState,
      markNotificationAsRead(1)
    );

    expect(nextState.notifications).toEqual([
      { id: 2, message: "Mensaje 2" },
    ]);
  });

  it("Debe cambiar displayDrawer a true con showDrawer", () => {
    const prevState = { ...initialState, displayDrawer: false };
    const nextState = notificationsReducer(prevState, showDrawer());
    expect(nextState.displayDrawer).toBe(true);
  });

  it("Debe cambiar displayDrawer a false con hideDrawer", () => {
    const prevState = { ...initialState, displayDrawer: true };
    const nextState = notificationsReducer(prevState, hideDrawer());
    expect(nextState.displayDrawer).toBe(false);
  });
});