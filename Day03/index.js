//Write a function called count character that takes as two parameter,
//console.log(countChar("Mississippi" , 'I'))

function charCount(word, char) {
    word= word.toLowerCase();
    char= char.toLowerCase();
  let str = word.split("");
  str = str.reduce((acc,curr)=>{
    if(curr === char){
        acc++;
    }
    return acc;
  }, 0)
  return `Total Number Of "${char}" is: ${str}`;
  
};


console.log(charCount("Mississippi", "i"));
