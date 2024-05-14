//write a function to check if a character is uppercase or lowercase

const isUpperCase = (char) => {
  // if(char.charCodeAt(0)>= 65 && char.charCodeAt(0)<=90){
  //     return true;
  // }
  // return false;

  return char === char.toUpperCase();
};
const isLowerCase = (char) => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return true;
  }
  return false;
};

console.log(isUpperCase("R"));
console.log(isUpperCase("o"));
console.log(isLowerCase("o"));
