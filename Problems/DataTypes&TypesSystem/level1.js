//  Level 1: Identify Data Types
// What data type will this store?
let name = "Ayush";
console.log(typeof name); //string

// What is the type of:
let age = 25;
console.log(typeof age); //number

// What is the type of:
let isStudent = true;
console.log(typeof isStudent); //boolean

// Predict the data type of:
let score;
console.log(typeof score); //undefined

// What is the data type of:
let nothing = null;
console.log(typeof nothing); //object

// What will typeof "hello" return?
console.log(typeof "hello"); // true

// What is the type of true?
console.log(typeof true); // boolean

// What is the type of:
let a;
console.log(typeof a); // undefined

// What is the output of:
console.log(typeof null); // object

// What is the type of:
console.log(typeof function() {}); // function

//What is the type of an array?
let arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

//What is the result of:
let result = "5" + 1;
result = result - 1;
console.log(result);


// Predict
console.log(isNaN("hello"));
console.log(isNaN("123"));

// You have a login system:
let myname = null;
if (myname) {
  console.log("Hello " + myName);
} else {
  console.log("No name given");
}

// You have a login system:
let username = "";
if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Please enter username");
}