export const aLength = (arr) => {
  let i = 0;
  for (const n of arr) {
    if (arr || n === 10) {
      i++;
    }
  }

  return i;
};
