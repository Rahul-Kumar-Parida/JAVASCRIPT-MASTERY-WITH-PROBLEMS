//Write a function to reverse a string without using any built-in methods .The Function should take string as input and return the reverse string

const reverseString = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
};

console.log(reverseString("hello"));
