//Write a function  called calculateMean that takes an array of numbers as input and returns the mean of these numbers.

const calculateMean = (arr) => {
  // let sum=0;
  // for(const avg of arr){
  //     sum+=avg;
  // }
  // return sum/arr.length;

  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum/arr.length;
};

console.log(calculateMean([1, 2, 3, 4, 5]));
