//write a function to calculate the sum of squares of all elements in an array.

const sumOfSquare = function (arr) {
  let sum = 0;
  for (let element of arr) {
    sum = sum + element * element;
  }

  return sum;
};

const SumOfSquare = (arr) => {
  return arr.reduce((acc, curElm) => (acc = acc + curElm * curElm), 0);
};
console.log(SumOfSquare([1, 2, 3]));
console.log(sumOfSquare([1, 2, 3]));
