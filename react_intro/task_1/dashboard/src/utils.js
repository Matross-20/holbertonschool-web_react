// utils.js

export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  