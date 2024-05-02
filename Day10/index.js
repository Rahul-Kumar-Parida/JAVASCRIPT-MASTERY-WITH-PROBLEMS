// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e contain the same elements int the same order), and false otherwise

const arrr = (a1, a2) => {
  return a1.every((curr, index) => curr === a2[index]);
};
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

console.log(arrr([1, 2, 3], [1, 2, 4]));
console.log(arrr([1, 2, 3], [1, 2, 3]));
console.log(arrr([], []));
