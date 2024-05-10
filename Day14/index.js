//Write A function called isPowerOfTwo that takes an Integer num as input and returns true if num is a power of two, and false otherwise.

const isPowerOfTwo = function (num) {
  let bool = false;
  for (let i = 0; i < num; i++) {
    if (2 ** i == num) {
      bool = true;
    }
  }
  return bool;
};

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
