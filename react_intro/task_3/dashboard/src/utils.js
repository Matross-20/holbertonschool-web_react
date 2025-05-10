// getFullYear that will return the current year
export const getFullYear = () => new Date().getFullYear();

// getFooterCopy It accepts one argument isIndex(boolean). 
// When true, the function should return Holberton School.
// When false, the function should return Holberton School main dashboard
export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School Main Dashboard';

// getLatestNotification It accepts one argument isIndex(boolean). 
export const getLatestNotification = () => 
  '<strong>Urgent requirement</strong> - complete by EOD';