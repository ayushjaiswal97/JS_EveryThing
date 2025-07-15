let a = [1,2,3,4,"Ayush", false, [5,6,67]];
console.log(a);

let b = new Array();
console.log(b); //[]

let c = new Array(5);
console.log(c); // [ <5 empty items> ]

let d = new Array("abc", "def", "ghi");
console.log(d); // [ 'abc', 'def', 'ghi' ]

let arr = [1,2,3,34,44];
console.log(arr[3]);
console.log(arr.length-2);
arr[4] = 5;
console.log(arr)