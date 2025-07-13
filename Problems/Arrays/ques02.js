let arr = [12, 2, 10, 5, 20];

// Print each element of an array using a for loop.
// for(let i = 0; i <= arr.length-1; i++){
//     console.log(arr[i]);
// }

// using foreach loop
arr.forEach(function(val){
    // console.log(val);
});

// for of loops
// for(let arrs of arr){
//     console.log(arrs);
// }

// Print only the even numbers from an array.
for(let i = 0; i<=arr.length; i++){
    if(arr[i]%2===0){
        // console.log(arr[i]);
    }
}

// Sum all the numbers in an array.
let sum = 0;
for(let i = 0; i<=arr.length-1; i++){
    sum += arr[i];
}
console.log(sum);

// Find the maximum number in an array.
let max = arr[0];
for(let i = 1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);

// Find the index of a specific value using .indexOf()
console.log(arr.indexOf(20));

// Sort an array of numbers in ascending order.
arr.sort((a, b) => a - b);
console.log(arr);

// Remove duplicates from an array.
let duplicates = [1,2,3,4,5,6,2,3,7];
let uniq = [...new Set(duplicates)];
console.log(uniq);

// Check if an array is empty or not.
let checkArr = [];
if(checkArr.length === 0){
    console.log("Array is empty");
 } else{
    console.log("Array is not empty")
 }

//  Create a new array where every number is doubled. (use .map())
let num = [1,3,5,6,7];
let doubled = num.map(num => num * 2);
console.log("Doubled:", doubled);

// Filter numbers greater than 10 from an array. (use .filter())
let num1 = [1,2,34,5,12,10];
let grtrThenTen = num1.filter(val => val > 10);
console.log("Filtered : " + grtrThenTen);