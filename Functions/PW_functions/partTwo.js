// 

let arr = [2,3,5];

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
});

arr.forEach((elem, indx, arry) => {
    console.log("arrow: ", indx, elem, arry);
});

const heros = ["naagraj", "doga", "dhruva" ,"maniraj"];

heros.forEach((element) => {
    console.log(element.toUpperCase());
});

arr.map(function(element, index, array){
    console.log(element, index, array);
});

heros.map((h) => {
    console.log(h.length);
});

// filter
console.log(heros);
const herosWithRaj = heros.filter((h) =>{
    return h.endsWith('raj');
});
console.log(herosWithRaj);

// shopping cart 
let cartBill = [20, 30, 40, 50];
let sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr,0)
console.log(sumOfCartBill);

const gameScore = [200, 300, 310, 250, 150];

// checks if all values are numbers
const gameScoreCheck =  gameScore.every((v) => typeof v === Number);
console.log("Check : ", gameScoreCheck);

// find score above 200
const above200 = gameScore.find((score) => score > 200);
console.log(above200);

// findIndex
const fndIndx = gameScore.findIndex(element => element > 200);
console.log(fndIndx);

// some
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));

// sort
// Ascending (Small → Big)
const nums = [25, 1, 100, 5];
nums.sort((a, b) => a - b);
console.log(nums);

// Descending (Big → Small)
nums.sort((a, b) => b - a);
console.log(nums);