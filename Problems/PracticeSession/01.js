// Q1: Declare a variable name and assign your name to it.
let name = "Ayush";
console.log(name);

// Q2: Declare a variable age and assign your age to it.
let age = 22;
console.log(age);

// Q3: Declare a variable isStudent and assign it a boolean value (true or false).
let isStudent = true;
console.log(isStudent);

// Q4: Declare a variable without assigning a value. What will be its typeof?
let withoutValue;
console.log(typeof withoutValue);

//Q5: Use typeof to check the data types of: "Ayush", 123, true, undefined, null, NaN

console.log(typeof "Ayush");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);


// Create two variables: a = 10, b = 3
// Perform and log the result of:a + b, a - b, a * b, a / b ,a % b

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
} else{
    console.log("B");
}