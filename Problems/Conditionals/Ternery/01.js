// Ternary Operator (Shortcut for if-else)

let marks = 40;
let result = marks >= 33 ? "Pass" : "Fail";
console.log(result);


// Use ternary to check if a number is even or odd.
let num = 22;
let check = num%2===0 ? "Even" : "Odd"
console.log(check);

// Use ternary to assign "Minor" or "Adult" based on age.
let age = 22;
let checkAge = age < 0 ? "Invalid Input" : age >= 18 ? "Adult" : "Minor";
console.log(checkAge);