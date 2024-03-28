"use strict";

//WRITE A FUNCTION FindLongestWord that takes a string as input and returns the largest word in the string. If there are multiple largest words, return th first one encountered
//🍀 METHOD `1`;
function FindLongestWord(str) {
  if (str.trim().length === 0) {
    return false;
  }
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  return `The Longest Word is :-> ${words[0]}`;
}

//🍀 METHOD `2`;
const FindLongestWord2 = (str) => {
  if (str.trim().length === 0) return false;
  let words = str.split(" ");
  return words.reduce((accum, currWord) => 
  (
    currWord.length > accum.length ? currWord : accum)," ")
  
};
console.log(FindLongestWord2("My Name Is Rahul"));




//practice....

const arr = [2,54,34,22,66,43];
// arr.sort((a,b)=>a-b); // ascending
// arr.sort((a,b)=>b-a); // descending

const ans = arr.reduce((acc, curr)=>{
  return acc>curr?acc:curr;
})
console.log(ans);