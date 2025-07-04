// function 

// function declaration
function lelo(){
  console.log("Function statement or declaration!");
} 
// lelo();

function hello(){
    console.log("hello from Function");
}
// hello();

// function greet(){
//     console.log("Welcome to Bhopal!");
// }
// greet();

// Function Expression
let fnc = function(){
  console.log("Function Expression")
}
// fnc();

// Fat Arrow function
let fnca = () =>{
  console.log("fat arrow function or arrow function")
} 
// fnca();

// Parameter and argument
function dance(val1){ //val1 is parameter
  console.log(`${val1} dance`);
}
// dance("boy"); // boy is argument
// dance("girl"); // girl is argument
// dance("lady"); // lady is argument

function add(v1 = 1, v2 = 2){  //(parameter) : v1, v2
    console.log(v1 + v2);
}
// add(1,2); // (argument) : 1,2
// add(11,14);

// default+rest+spread
// function adding(v1,v2){
//   console.log(v1, v2);
// }
// adding(); // undefined,undefined

// function adding(v1,v2){
//   console.log(v1, v2);
// }
// adding(1); //1 undefined

// function adding(v1,v2){
//   console.log(v1+v2);
// }
// adding(1); //undefined + undefined = NaN

// using default parameter
function adding(v1=1,v2=3){
  console.log(v1+v2);
}
adding();

// rest parameter
function abcd(a,b,c,d){
    console.log(a,b,c,d);
}
abcd(1, 2, 3, 4);//

// using rest operator
function abcde(...val){
    console.log(val);
}
abcde(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // array mein aayega

function abc(a,b,c,...val){
  console.log(a,b,c,val)
}
abc(1,2,3,4,5,6,7,8); //1 2 3 [4, 5, 6, 7, 8] (output)

//Return Values
// function rtn(){
//   return 12;
// }
// let vl1 = rtn();
// console.log(vl1);

function rtn(v){
  return 12+v;
}
let vl1 = rtn(12);
console.log(vl1);

// Early return pattern 
function checkAge(age){
  if(age<18) return "Denied";
  return "Allowed"
}
let chk = checkAge(19);
console.log(chk);

//
let nums = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
// console.log(sum(...nums)); // Output: 6

// first class function
// pass as an argument
function fcf(val){
  val();
}
fcf(function(){
  console.log("Hello");
})

// higher order function
// function hof(val){

// }
// foh(function(){

// })

//
function Hof(){
  return function(){
    console.log("heyhey")
  };
}
Hof()();

//example


// 
// function callMe(callback) {
//   console.log("Calling the function...");
//   callback(); // ✅ calling the passed function
// }

// callMe(function () {
//   console.log("I'm the callback function!");
// });


// pure function - 
let a = 12;

function pure(){
  console.log("hello");
}
pure();

// impure function
let n = 12;
function hui(){
  a++;
  console.log(n);
}
hui();

let x = 10;
function impureFunction() {
  x++;
  console.log(x);
}
// impureFunction();


// clousre
function cls(){
  let a = 13;
  return function(){
    console.log(a);
  };
}
let cl = cls();
cl();

//
function createCounter() {
  let count = 0;               // ① outer variable

  function increment() {       // ② inner function
    count++;                   // ③ uses outer variable
    console.log(count);
  }

  return increment;            // ④ returns inner function
}

const counter = createCounter(); 
counter(); // 1  
counter(); // 2  
counter(); // 3  


// lexical
function lx(){
  let a = 14;
  console.log(a);
  function hg(){
    let b = 12 + a;
    console.log(b);
    function ij(){
      let c = 1 + b;
      console.log(c);
    }
    ij();
  }
  hg();
}
lx();

function outer(){
    let name = "Ayush";
    function inner(){
        console.log(name);
    }
    // inner();
}
// outer();

// IIFE(Immediately Invoked Function Expression)
(function (){
    console.log("This is IIFE")
})();

// (function(){
//     console.log("IIFE")
// })();

// Hoisting: Declarations vs Expressions
// function Declarations - hoisted
// hello(); // works
function hello() {
console.log("Hi");
}

// but function expressions doesn't 
// greet(); // error
// const greet = function () {
// console.log("Hi");
// };