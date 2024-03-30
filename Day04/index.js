//🍀Write a Function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The Function should be return a string indicating the type of triangle: 'equilateral', 'isosceles', and 'scalene'

function checkTriangleType(a, b, c) {
  if (a === b && b === c && a === c) {
    return "equilateral";
  } else if (a===b || b===c || a===c) {
    return "isoseles";
  } else if (a !== b && b !== c && a !== c) {
    return "scalene";
  }
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(6, 4, 6));
console.log(checkTriangleType(5, 8, 7));
