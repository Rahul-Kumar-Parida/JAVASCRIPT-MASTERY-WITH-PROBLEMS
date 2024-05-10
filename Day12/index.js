//Write a function that takes an array of integer ass input and removes any duplicate elements, returning a new array with only the unique elements.

function removeDuplicate(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

console.log(removeDuplicate([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicate([5, 6, 7, 8, 8, 9, 9]));
