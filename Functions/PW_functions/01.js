// functions declarations and calling funtions:-
function greet(){
    console.log("Hi there");
    console.log("How are you?")
}

// functions inside input // means parameter & argument 
function sqr(x){ // x -> parameter
    // console.log(x*x);
    return x * x;
}
greet();

let a = sqr(8); // 8 -> argument
console.log(a)

//
function sayHi(){
    console.log("Hi there, My self Ayush jaiswal and I'm from Bokaro Steel City!")
}
sayHi();


// return
function passMessage(){
    return "Hi there, My self Ayush jaiswal and I'm from Bokaro Steel City!!!";
}

let message = passMessage();
console.log(message);
let newMessage = message + " Sending a greet";
console.log(newMessage);

// function with one parameter :-
function displayMessage(messagetoBeDisplayed){
    console.log(messagetoBeDisplayed);
}
displayMessage("Hi there, how are you ?");
displayMessage("I'm enjoying the journey of JavaScript !")

// function with multiple parameter
function addTwoNumber(num1, num2){
    console.log(`Add two numbers are : ${num1 + num2}`);
}
addTwoNumber(12, 3);

// Default parameter :- 
function addTwo(x = 10, y){
    console.log(x+y);
}
addTwo(1); // NaN

function add(x = 10, y = 5){
    return x + y;
}
console.log(add());
// console.log(add(1,2));

//
function greet(name = "Guest"){
    console.log("Hello, " + name)
}
greet("Ayush"); // Hello, Ayush
greet();

// function with an unlimited number of parameters
function unlimNum(...nums){
    return nums;
}
console.log(unlimNum(1,2,3,4,5));

//
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(4, 5, 6, 7, 8));
