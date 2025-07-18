// 1. Named Function :- A function that has a name.
function greet(){
    console.log("Hello, Namaste");
}
greet(); // function calling

// 2. Anonymous Function :- A function without a name, usually used in expressions or as arguments.

let sayHi = function(){
    console.log("Hi");
}
sayHi();

// 3. Arrow Function (ES6) :- A shorter syntax for writing functions using () =>.
let add = (a,b) => a + b;
console.log(add(1,2));

// 4. Function Expression :- A function stored inside a variable.
let mul = function(a,b){
    return a * b;
}
console.log(mul(2,3));

//  5. Immediately Invoked Function Expression (IIFE) :- A function that runs immediately after it's defined.
(function(){
    console.log("IFFE Executed");
})();

//  6. Constructor Function :- Used to create multiple objects with similar properties.
function Person(name) {
  this.name = name;
}
const p1 = new Person("Ayush");
console.log(p1.name);

// 7. Generator Function :- Used to pause and resume execution using yield.
function* count() {
  yield 1;
  yield 2;
  yield 3;
}
const counter = count();
console.log(counter.next().value); // 1

// 8. Async Function :- A function that returns a Promise and uses await inside it.
async function fetchData() {
  let result = await fetch("https://api.example.com");
  let data = await result.json();
  console.log(data);
}
