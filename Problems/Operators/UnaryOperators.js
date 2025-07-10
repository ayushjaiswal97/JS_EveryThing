// // Unary Operators (+, -, ++, --, typeof, !, delete, void)

// // Increment/Decrement
// // What is the output?
// let a = 10;
// console.log(a++);
// console.log(a);

// // Predict the result: 
// let x = 3;
// let y = ++x;
// console.log(x, y);

// // Unary Plus / Minus
// // Convert a string to number using unary +:
// // let str = "123"; //number
// let str = "ayush"; //number
// let num = +str;
// console.log(typeof num);

// // what will this log?
// let b = "19";
// console.log(-b);

// // Type Checking
// // What is the output of:
// console.log(typeof null); // Objects bugs
// console.log(typeof []);   // Objects -> because of reference type of data type is object

// //🟥 Logical NOT
// // Explain:
// console.log(!true);
// console.log(!0);

// // 🟧 Delete
// const obj = {name: "Ayush", age: 22};
// delete obj.age;
// console.log(obj);


// //What will this log?
// let count = 7;
// console.log(--count); // 6
// console.log(count++); // 6
// console.log(count); //7

// //  Level 2: Inside Expressions

// // What’s the final value of result?
// let m = 2;
// let n = m++ + ++m;
// console.log(n);

// // Trace the output:
// let z = 3;
// console.log(z++ + z++); // 7

// // Solve:
// let l = 5;
// let res = ++l + l++ + l;
// console.log(res);

// // Level 3: Inside Conditions
// // What will be printed?
// let i = 0;
// if (i++ === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// // Output?
// let g = 1;
// while (g < 3) {
//   console.log(g++);
// }

// Output?
let f = 3;
while (f--) {
  console.log(f);
}

//  Level 4: Tricky Ones
// What will this output?
let a = 1;
let b = a++ + ++a + a++;
console.log(a, b);

// Predict:
let n = 1;
n = n++ + ++n * 2;
console.log(n);

// Dry run:
let x = 1;
x = x++ + x++ + x;
console.log(x);

// q1
let ab = 2;
let ba = ab++ + ab++ + ++ab;
console.log(ab, ba);

//Q2
let xy = 5;
let yx = ++xy + xy++ + xy + --xy;
console.log(xy, yx); // 6, 25

//Q3
let nm = 1;
nm = nm++ + nm++ + nm++;
console.log(nm); // 6

//Q4
let count = 0;
count = count++ + ++count + count;
console.log(count); // 4

//Q5
let i = 1;
let result = i++ + ++i + i++ + i;
console.log(i, result); // 1, 11

// Q6
let num = 3;
let val = ++num + num++ + ++num + num--;
console.log(num, val); // 5, 19

// Q7
let zy = 1;
let yz = zy++ + zy++ + ++zy + --zy;
console.log(zy, yz); // zy = 4 , yz = 3

//Q8
let w = 4;
let q = w-- + w-- + ++w + w++;
console.log(w, q); // 4 + 3 + 3 + 3 w = 4, q = 13

// Q9
let num1 = 10;
let num2 = num1++ + --num1 + num1-- + ++num1; // num1 = 10, num2 = 40
console.log(num1, num2); // 10 , 40

// Q10
let v = 0;
v = ++v + v++ + ++v + v++;
console.log(v); // ?

// Q11
let nm1 = 1;
let nm2 = nm1++ + ++nm1 + nm1++ + ++nm1;
let fnl = nm1 + nm2;
console.log(nm1, nm2, fnl); // ?




