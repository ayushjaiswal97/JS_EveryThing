// Array - Stores multiple value in single variable .
// // Creating and accessing
// let marks = [10, 40, 52, 37, 92];
// console.log(marks[0]);

// // Modified Arrays
// let arr = [1, 2, 3];
//  console.log(arr);
//  arr[2] = 12;
//  console.log(arr);

//  // Array methods
//  //push
//  let ar = [1,2,3,4,5];
//  ar.push(7000);
//  console.log(ar);

//  // pop
//  let ar1 = [1,2,3,4,5];
//  ar1.pop();
//  console.log(ar1);

//  // shift
//  let arr2 = [1,2,3,4];
//  arr2.shift();
//  console.log(arr2);

 // splice
 let arr3 = [1,2,3,4]
 arr3.splice(1,2);
 console.log(arr3);

 // slice
 let arr4 = [1,2,3,4,5];
//  let newArr = arr4.slice(0,2);
let newArr = arr4.slice(0, 3);
 console.log(newArr);
 console.log(arr4);

 
 
// reverse

//sort
// Wrong way 
let nums = [10, 5, 40, 25];
nums.sort();
console.log(nums); // ["10", "25", "40", "5"] → [10, 25, 40, 5] 

// Right way to sort in ascending order
let arr5 = [11,62,3,4,25];
let sr = arr5.sort(function(a, b){
    return a - b;
});
console.log(sr);

// Right way to sort in descending order
let sr2 = arr5.sort(function(a, b){
    return b - a;
});
console.log(sr2);

// forEach
let nums1 = [10, 20, 30];
nums1.forEach((num) => {
// console.log(num);
console.log(num+5);
});

// map
let mpArr = [12,62,3,4,25];
let newMpArr = mpArr.map(function(val){
    return 12;
});
console.log(newMpArr);

//
let newArr2 = mpArr.map(function(val){
    if(val > 10) return val;
});
console.log(newArr2);

// filter
let arr6 = [1,2,3,4,5,6,7,8];
let newArr6 = arr6.filter(function(val){
    if(val > 4) return true;
})
console.log(newArr6);

// reduce() 
let arr7 = [1,2,3,4,5,6];
let ans = arr7.reduce(function(accumulator , val){
    return accumulator + val;
},0);
console.log(ans);

// find
let arr8 = [1,2,3,4,5,1];
let va = arr8.find(function(val){
    return val === 1;
})
console.log(va);    

let arr9 = [
    { id: 1, key: 1},
    { id: 2, key: 2},
    { id: 3, key: 1}
];
let va1 = arr9.find(function(val){
    return val.key === 1;
});
console.log(va1);

let score = [10, 30, 32, 90];
let any = score.some(function(val){
    return val > 85;
});
console.log(any);

// every
let eve = [10, 30, 32, 90];
let eveAns = eve.every(function(val){
    return val > 5;
});
console.log(eveAns);

// Array Destructuring
let des = [1,2,3,4,5]
// let [a,b] = des ;
// console.log(a);
// console.log(b);

let [a, b, , d] = des;
console.log(a);
console.log(b);
console.log(d);

// spread 
let spd = [1,2,3,4,5,6,7,8,9];
let spd2 = [...spd];
console.log(spd);
console.log(spd2);

spd2.pop();

console.log(spd2)

