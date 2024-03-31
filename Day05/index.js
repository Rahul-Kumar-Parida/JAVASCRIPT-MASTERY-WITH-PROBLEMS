//Sort an array
//input: [3,1,6,4,8,5],   output: [1,3,4,5,6,8]

function sortArray(arr) {
  //   return arr.sort();
//   let res= arr.sort((a, b) => a - b); //ascending
  let res= arr.sort((a, b) => b - a); //descending
  return res;
}
console.log(sortArray([3, 15, 6, 54, 8, 5]));
