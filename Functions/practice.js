// Write a BMI Calculator : BMI = weight (kg) / (height (m))^2

function bmi(weight, height){
    return weight / (height * height);
}
console.log(bmi(60, 1.7).toFixed(2));

//Write a resusable discount calculator (HOF style)
// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount / price)
//     }
// }
// let dicounter = discountCalculator(20);
// console.log(dicounter(200))

function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1000));
console.log(twenty(2000));

// Build a counter using closure
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(c());

// Create a pure function to transform a value

function double(val){
    return val * 2;
}
console.log(double(4));

// Use IIFE to isolate variables.
(function(){
    const password = "secret password";
    console.log(password);
})();
// console.log(password)s

