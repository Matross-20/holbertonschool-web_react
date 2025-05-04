export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  let copy;

  if (isIndex) {
    copy = 'Holberton School';
  } else {
    copy = 'Holberton School main dashboard';
  }

  return copy;
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
