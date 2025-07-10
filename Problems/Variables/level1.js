// Create a variable called myName and store your name in it.
let myName = "Ayush jaiswal";
console.log(myName);

// Create a variable age and store your age.
let age = 22;
console.log(age);

// Create a variable isStudent and store the value true.
let isStudent = true;
console.log(isStudent)

// Create a variable price and store 499.99 in it.
var price = 499.99;
console.log(price);

// Create a variable greeting and store "Hello, World!".
let greeting = "Hello, World!";
console.log(greeting);

// Declare three variables a, b, and c in one line with values 5, 10, and 15.
let a = 5, b = 10, c = 15;
console.log(a,b,c);

// Try creating variables using var, let, and const. Do you notice any difference?
// 1. Using var:
var name = "Ayush";
console.log(name); // Ayush

var name = "Kumar"; // re-declaration is allowed
console.log(name); // Kumar

// 2. Using let
let myAge = 25;
console.log(age); // 25

// let age = 30; ❌ Not allowed: Cannot re-declare the same variable in same scope
age = 30; // ✅ Reassignment is allowed
console.log(myAge);

//  3. Using const:
const city = "Delhi";
console.log(city); // Delhi

// city = "Mumbai"; //❌ Not allowed: Cannot reassign
// const city = "Mumbai"; //❌ Not allowed: Cannot re-declare

