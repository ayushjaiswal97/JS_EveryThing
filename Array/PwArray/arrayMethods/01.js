let arr = [1,2,3,4,5];

// .push()
arr.push(6,7);
console.log(arr);

// .pop()
arr.pop();
console.log(arr);

// shift()
let f = arr.shift();
console.log(arr);
console.log(f);

// unshift()
arr.unshift(9);
console.log(arr);

let a1 = [1,2,3,4,5];
let a2 = [6,7,8];
let a3 = a1.concat(a2);
console.log(a1, a2, a3);

// .join()
let s = a3.join("");
console.log(s);

// reverse
let r = a3.reverse();
console.log(r);

// indexOf
let i = a3.indexOf((8));
console.log(i);

let arr1 = [1,2,3,4,5,6];
console.log(arr1.slice(2,4));

let arr2 = [1,2,3,4,5];
arr2.splice(2,1,11);
console.log(arr2)