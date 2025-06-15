import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

it('getFullYear', () => {
  expect(getFullYear()).toEqual(2021);
});

it('getFooterCopy with true', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
});

it('getFooterCopy with false', () => {
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

it('getLatestNotification', () => {
  expect(getLatestNotification()).toEqual(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
