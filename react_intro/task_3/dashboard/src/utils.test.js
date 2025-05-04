import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils_tests', function () {
  describe('getFullYear', function () {
    it('should return current year', function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });
  describe('getFooterCopy', function () {
    const trueCopy = 'Holberton School';
    const falseCopy = 'Holberton School main dashboard';

    it('Should return true message', function () {
      const copy = getFooterCopy(true);
      expect(copy).toEqual(trueCopy);
    });
    it('Should return false message', function () {
      const copy = getFooterCopy(false);
      expect(copy).toEqual(falseCopy);
    });
  });
  describe('getLatestNotification', function () {
    it('shold return correct string element', function () {
      const element = '<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toEqual(element);
    });
  });
});
