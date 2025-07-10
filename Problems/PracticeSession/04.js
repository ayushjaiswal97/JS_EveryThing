// . Declare your name and city using const, and your age using let.
const name = "Ayush";
const city = "Bhopal";
let age = 21;

console.log(name);
console.log(city);
console.log(age);

// Try this and observe the result:
//    let x = 5;
//    let x = 10;

// let x = 5;
// let x = 10; // canont redeclare let variable

// console.log(x);


// . Guess the output:
//    console.log(count);
//    var count = 42;

 console.log(count); // undefined because of hoisting
   var count = 42;

// Create a const object and add a new key to it — does it work?
const obj ={
    name: "Ayush",
    age: 21,
};
obj.city = "Bhopal";
console.log(obj);

// Try accessing a let variable before declaring it — what error do you see

console.log(x);
let x = 10; // TDZ can access before initailize 

// . Change a const array by pushing a value. Will it throw an error?

