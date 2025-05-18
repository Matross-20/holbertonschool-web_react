import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("test", function () {
  describe("getFullYear", function () {
    it("Correct current year", function () {
      const currentYear = getFullYear();
      expect(currentYear).toEqual(new Date().getFullYear());
    });
  });

  describe("getFooterCopy", function () {

    it("True message", function () {
      expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("False message", function () {
      expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
  });

  describe("getLatestNotification", function () {
    it("Correct Notification", function () {
      expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
  });
});
