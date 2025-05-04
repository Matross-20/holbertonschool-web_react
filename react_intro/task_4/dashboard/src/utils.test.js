import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('getFullYear function', () => {
    it('should return the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).to.equal(currentYear);
    });
});

describe('getFooterCopy function', () => {
    it('should return the correct string when the argument is true', () => {
        const result = getFooterCopy(true);
        expect(result).to.equal("Holberton School");
    });

    it('should return the correct string when the argument is false', () => {
        const result = getFooterCopy(false);
        expect(result).to.equal("Holberton School is the best school in the world");
    });
});

describe('getLatestNotification function', () => {
    it('should return the correct string', () => {
        const notification = "<strong>Urgent requirement</strong> - complete by EOD";
        const result = getLatestNotification(notification);
        expect(result).to.equal(notification);
    });
});
