// 🔄 Chapter 3: Operators
// . Predict:

console.log("10" + 1); //101
console.log("10" - 1);  //9
console.log(true + false); //1
console.log(!!"Sheryians"); //ture

//. Convert using unary +
let str = "42";
let num = +str;
console.log(num); // 42 is number
console.log(typeof num); // number

//. Use ternary:
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);

// . Build a calculator:
// Using switch + arithmetic operators
// function calc(a, b, operator) {
// // +, -, *, /
// }

function calc(a, b, operator){
    switch(operator){
        case "+":
            return a + b;
        case "-":
           return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";    
    }
}
console.log(calc(5, 3, "+"));
console.log(calc(5, 3, "-"));
console.log(calc(5, 3, "*"));
console.log(calc(5, 3, "/"));

//. Score logic:
// let marks = 82;
// Print "Excellent", "Good", "Average", or "Fail" based on ranges
let marks = 82;
if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 80) {
    console.log("Good");
} else if (marks >= 70) {
    console.log("Average");
} else {
    console.log("Fail");
}


