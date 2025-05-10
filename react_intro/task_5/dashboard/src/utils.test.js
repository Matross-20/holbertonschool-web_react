import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('Test Suite nº1', () => {
    // test to check that the function getFullYear returns the correct year
    it('Test nº1 - getFullYear should return correct year', () => {
      expect(getFullYear()).toBe(new Date().getFullYear());
    });

    // test to check that getFooterCopy returns the correct string when the argument is true
    it('Test nº2 - getFooterCopy returns the correct string is true', () => {
      expect(getFooterCopy(true)).toEqual("Holberton School");
    });

     // test to check that getFooterCopy returns the correct string when the argument is false
     it('Test nº3 - getFooterCopy returns the correct string is false', () => {
      expect(getFooterCopy(false)).toEqual("Holberton School Main Dashboard");
    });

    // test checking the returned string for getLatestNotification
    it('Test nº4 - getLatestNotification returns the correct string', () => {
      expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});

