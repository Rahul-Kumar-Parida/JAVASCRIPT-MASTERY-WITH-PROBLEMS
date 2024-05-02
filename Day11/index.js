//Write a function that takes a number as input and returns the sum of its digit

const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number);
  let res = arr.reduce((acc, curr) => acc + curr, 0);
  return res;
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
