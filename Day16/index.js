//Write a function Findmin that takes an array of numbers as input and returns the minimum element in the array.

const Findmin = (arr) => {
    arr.sort((a, b) => {
      if (b > a) return -1;
    });
    return arr[0];

//   return Math.min(...arr);

};

console.log(Findmin([5, 10, 2, 8]));
