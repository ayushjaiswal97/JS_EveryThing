// variables

// var let const 

// var a = 12;
// var username = "harsh";

// decelration and initailization

// var a; // decelration
// var a = 10; // declare and initialize

// // re-decelare and re-initailize or no error with same name using and it wil not give an error.
// // example
// var score = 10;
// var score = 20;

// //  let - Can be re-declared and updated.
// let b = 12;

// const - fixed value can't be changed ,

const PI = 3.14;
// PI = 3.14159; // ❌ Error

// scope

// global scope
// let name = "Ayush";
// const name = "Ayush";
// var name = "Ayush";

function greet(){
    // console.log("hello", name); // can access
}
// greet();

// function scope 
function showAge(){
    let age = 22; 
    // const age = 22;
    // var age = 22;
    console.log(age);
}
// showAge();
// console.log(age); // Error: age is not defined

// block scope
{
    // let city = "Mumbai"; // can access inside the block
    // const city = "Mumbai"; // can access inside the block
    var city = "Mumbai"; // can access inside the block
    // console.log(city);
}
// console.log(city); // Error: city is not defined for (let and const)
// console.log(city);  // but in the var  it can access outside the block scope it not follow block scope

// TDZ (temporal Dead Zone)

// console.log(a);
// let a = 10; // error 
// const a = 10; // error

const person = { name: "Ayush" };
console.log(name);
person.name = "Harsh";
console.log(person.name);   
person = {};
