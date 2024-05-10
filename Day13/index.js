//Write a function that takes a string as input and returns the count of vowels in that string. Consider "a", "e","i","o","u" as vowels (both lowercase and uppercase)

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let count = 0;
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
};
console.log(countVowels("Hello World"));
console.log(countVowels("thE qucick brown jum World"));
console.log(countVowels("Hello World"));
