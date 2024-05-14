//Write a function to convert a string to camelCase and snake case

const toCamelCase = (str) => {
  str = str.trim().split(" ");
  return str
    .map((curr, index) => {
      if (index === 0) {
        return curr.toLowerCase();
      } else {
        return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
      }
    })
    .join("");
};
console.log(toCamelCase("Hello World Namaste"));
