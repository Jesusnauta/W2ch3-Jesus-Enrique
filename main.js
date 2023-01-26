export const aLength = (arr) => {
  let i = 0;
  for (const n of arr) {
    if (arr || n === 10) {
      i++;
    }
  }

  return i;
};

//map

export const aMap = (array, number, Symbol) => {
  const _length = aLength(array);
  for (let i = 0; i < array.length; i++) {
    switch (Symbol) {
      case "*":
        array[i] *= number;
        break;
      case "/":
    }
  }
};

//indexOf

export const arrayIndexOf = (array, value) => {
  for (let i = 0; i < aLength(array); i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
