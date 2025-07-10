// . Predict the output:
console.log(null + 1);  // 1 beacause of type coercion when null is added with  number null will convert into number. 
// null + 1,
// →  0 + 1,
//  → 1
console.log(Number(null)); // 0
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); // true = 1 & false = 0, 1+0 = 1
console.log(Number(true)); // → 1
console.log(Number(false)); // → 0

//. Check types:
console.log(typeof []); //object
console.log(typeof null); // object
console.log(typeof 123n); // bigint

// . Truthy or Falsy?
//   console.log(Boolean(0)); // falsy
//   console.log(Boolean("0")); // truthy
//   console.log(Boolean([])); // truthy
//   console.log(Boolean(undefined)); // falsy

//. Write a function isEmpty(value) that checks if a given value is null, undefined, or "".
function isEmpty(value) {
    if (value === null || value === undefined || value === "") {
        return true;
    }
    return false;
}
console.log(isEmpty(0));
console.log(isEmpty(""));
console.log(isEmpty(null));
console.log(isEmpty(undefined));

//  Compare with loose vs strict:
  console.log(5 == "5"); // true
  console.log(5 === "5"); // false
