//Write a function called CalculateAverage that takes an array of numbers as input and returns the average of those numbers.

const CalculateAverage = (arr) => {
  const total = arr.reduce((accum, curr) => accum + curr, 0);
  return total/arr.length;
};

console.log(CalculateAverage([3, 4, 5, 6, 7]));
