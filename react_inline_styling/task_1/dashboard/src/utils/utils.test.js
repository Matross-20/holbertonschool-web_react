import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('Create basic tests with four tests', function () {
    describe('check that the function getFullYear returns the correct year', function () {
      it('should return current year', function () {
        expect(getFullYear()).toBe(new Date().getFullYear());
      });
    });
    describe('check that getFootetVopy returns the correct string when the argument is true ot false', () => {
        it('should return Holberton school when it is true', () => {
            expect(getFooterCopy(true)).toEqual('Holberton School');
        });
        it('should return Holberton School main dashboard when it is false', () => {
            expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
        });
    })
    describe('check the returned string for getLatestNotification', () => {
        it('should return <strong>Urgent requirement</strong> - complete by EOD', () => {
            expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
        });
    });
});