"use strict";

//input:  "my name is rahul parida";
//output: #MyNameIsRahulParida

const camelCase = (str) => {
  if (str.length >= 280 || str.trim().length === 0) return false;

  let newstr = str.split(" ");
  newstr = newstr.map(
    (cur) =>
      // cur.replace(cur[0], cur[0].toUpperCase())
      cur.charAt(0).toUpperCase() + cur.slice(1)
  );
  newstr = newstr.join("");
  return `#${newstr}`;
};

console.log(camelCase("my name is rahul kumar parida"));
