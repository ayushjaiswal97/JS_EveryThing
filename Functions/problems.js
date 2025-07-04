//
greet ();

function greet(){
    console.log("Hello!");
}

//convert this into arrow function
// function multiply(a, b){
//     return a * b;
// }
let multiply = (a, b) => {
    return a * b;
};
let ans = multiply(2,3);
console.log(ans);

// find parameter and arguments 
function welcome(name){ // name = parameter
    console.log(name);
}
welcome("ayush"); // ayush = argument 

// find how many parameter or argument
function demo(a,b,c){} // 3parameter - a,b,c
demo(1,2); // 2 arguments - 1,2

//predict the output
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi();

// Use rest parameter tp accept any number of scores and return the total.
function getScores(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(getScores(10,18,20,26));

// fixed the problem using early return
// function checkAge(age){
//     if(age < 18){
//         console.log("Too young")
//     } else{
//         console.log("Allowed")
//     }
// }
// checkAge(12);

function checkAge (age) {
if (age < 18) return "Too young" ;
 return "Allowed";
}
console.log(checkAge(19));

// what is the return value of this function?
function f(){
    return;
}
console.log(f()); //undefined

// Can you assign a function to a variables and then call it show it.

let a = function(){
 console.log("Function called")
}
a();

//Pass a function into another function and execute it inside.
function abcd(val){
    val();
}
abcd(function(){
    console.log("huihui");
}); 

// Identify Higher Ordered function.
[1,2,3].map(function(x){  // map is higher ordered function
    return x * 2;
});

// pure vs impure function
// let total = 0;
// function addTotal(num){ 
//     total += num; // Impure function
// }

// convert the above function into pure function.
let total = 0;
function addTotal(num){ 
    let newTotal = total;
    newTotal += num; // pure function
}

// what is log in this 
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

// Convert this normal function into an IIFE:
// function init(){
//     console.log("Initailized");
// }

(function init(){
    console.log("Initailized");
}) ();

//script.js >
 // What is the use of IIFE? Name one real-world use case.
let shery = (function () {
let score = 0;
return {
getScore: function () {
console.log(score);
},
setScore: function (val) {
score = val;
},
};
})();


//What will be the output here and why?
// greeting();
// var greeting = function(){
//     console.log("Hii!"); //error
// };

//  
greeting();
function greeting(){
    console.log("Hii!"); //error
};