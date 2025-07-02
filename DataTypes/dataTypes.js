// dataypes -> In JavaScript, every value has a type.

// There are two categories:
// Primitive types – stored directly.
// Reference types – stored as memory references.

// Primitive types - string, number, boolean, null, undefined, symbol, bigInt.
// string 
let name = "harsh";
console.log(name);

// number 
let num1 = 12;
let num2 = 12.3;
console.log(num1);
console.log(num2);

// Boolean
let userFirst = true;
let userSecond = false;
console.log(userFirst);
console.log(userSecond);

// null
let car = null;
console.log(car);

// undefined
let a;
console.log(a);

// symbol
let u1 = Symbol("uid");
let u2 = Symbol("uid");

const obj ={
    uid: 1,
    name: "harsh",
    age: 22,
    email: "harsh@test.com",
};
let UID = Symbol("uid");
obj[UID] = "001";
console.log(obj);

//bigInt 
let b = 9007199254740991n;
console.log(b+4n);

// Reference types - array, object, function.
 
// array
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr2.pop());

//obj 

const c ={
    name: "harsh",
};
let d = c;
d.name = "Ayush";
console.log(c.name);
console.log(d.name);

//
