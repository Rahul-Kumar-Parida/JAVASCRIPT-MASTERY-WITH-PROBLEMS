//Factorial of a number

const Factorial = (num) => {
  let sum = 1;
  let i = 1;
  while (i <= num) {
    sum = sum * i;
    i++;
  }
  return sum;
};

console.log(Factorial(1));
console.log(Factorial(2));
console.log(Factorial(3));
console.log(Factorial(4));
console.log(Factorial(5));
console.log(Factorial(6));
console.log(Factorial(7));
console.log(Factorial(8));
console.log(Factorial(9));
console.log(Factorial(10));
