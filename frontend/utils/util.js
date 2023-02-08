export const objectToString = (obj) => {
  let str = '';
  for (const key in obj) {
    str += `${key}: `;

    if (key == 'trending_jobs') {
      str += `["${obj[key]}"]`;
    } else if (typeof obj[key] === 'string') {
      str += `"${obj[key]}"`;
    } else {
      str += `${obj[key]}`;
    }
    str += ' ';
  }
  return str;
};

export const objectKeysToString = (obj) => {
  const temp = obj;
  delete temp.trending_jobs;

  return Object.keys(temp).join(' ');
};
