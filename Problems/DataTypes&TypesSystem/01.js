// // Predict the output:
// console.log(null + 1); // 1
// console.log("5" + 3); // 53
// console.log("5" - 3); // 2
// console.log(true + false); // 1

// // Check types:
// console.log(typeof []); // Object
// console.log(typeof null); //Object
// console.log(typeof 123n); //BigInt

// // Truthy or Falsy?
// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined));// falsy 

// Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
function isEmpty(value){
    return value === null || value === undefined || value === "";
}
console.log(isEmpty(null));
console.log(isEmpty(undefined));
console.log(isEmpty(""));
console.log(isEmpty("Ayush"));
console.log(isEmpty(1));

// . Compare with loose vs strict:
console.log(5 == "5"); // true
console.log(5 === "5"); // false