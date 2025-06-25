import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("getFullYear return the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear)
})

test("getFooterCopy return the correct true answer", () => {
    expect(getFooterCopy(true)).toBe("Holberton School")
})

test("getFooterCopy return the correct false answer", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
})

test("getLatesNotificacion return the correct html format", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})
