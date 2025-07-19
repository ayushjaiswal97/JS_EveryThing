//21.Merge two arrays into one.
let arr1 = [1,2,3,4,5];
let arr2 = [12,3,6,19];
let newArr = [...arr1, ...arr2];
console.log(newArr);

// 22.Find the common elements between two arrays.
let firstArray = [1,2,3,4,5];
let secondArray = [3,4,5,6,7];
let common = firstArray.filter(items => secondArray.includes(items));
console.log(common);

// 23.Create a function that checks if an array is a palindrome.
function isArrayPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false; 
    }
  }
  return true; 
}
console.log(isArrayPalindrome([1,3,2,1]));


// 24.Rotate an array to the right by one place.
let rotate = [1, 2, 3, 4, 5];

let last = rotate.pop();     // Remove last element (5)
rotate.unshift(last);        // Insert 5 at the beginning

console.log(rotate); 

// 25.Count the number of times each element appears in an array.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = {};

for (let i = 0; i < fruits.length; i++) {
    const item = fruits[i];
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
}

console.log(count);


// 26.Flatten a nested array (only one level deep).

// 27.Find the second largest number in an array.

// 28.Remove all falsy values (false, 0, "", null, undefined, NaN) from an array.

// 29.Chunk an array into smaller arrays of a given size.

// 30.Check if two arrays are equal (same values and order).