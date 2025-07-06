// Create an array with 3 fruits and print the second fruits.
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);

// Add "Mango" at the end and  "pineapple" at the begginning of this array.
let fruit = ["apple", "banana"];
fruit.push("mango");
fruit.unshift("pineapple");
console.log(fruit);

// Replace "banana" with "kiwi" in the array above .
let fruit1 = ["apple", "banana"];
fruit1.pop();
fruit1.push("kiwi");
console.log(fruit1);

// remove the last element from this array using a method:
let numbers = [1,2,3,4];
numbers.pop();
console.log(numbers);

// Insert "Red" and "Blue" at index 1 in this array:
let color = ["Green", "Yellow"];
color.splice(1,0, "Red", "Blue");
console.log(color);

// Extract only the middle 3 elements from this array.
let arr = [1,2,3,4,5,6,7];
let newArr = arr.slice(2,5);
console.log(newArr);

// Sort this array Alphabetically and then reverse it.
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
 names.sort().reverse();
console.log(names);

// Use .map() to square each number.
let arr1 = [1,2,3,4];
let newArr1 = arr1.map(function(val){
    return val*val;
});
console.log(newArr1);

// Use .filtter() to keep numbers greater than 10:
let  mp = [5,2,13,40,8];
let newMp = mp.filter(function(val){
    return val > 10;
});
console.log(newMp);

// Use .reduce() to find the sum of this array:
let sum = [10,20,30,40,50];
let allSum = sum.reduce((acc, val) => {
    return acc + val;
},0);
console.log(allSum);

// Use .find() to get the first number less than 10:
let arr2 = [12, 15, 3, 8, 20];
let newArr2 = arr2.find(function(val){
    return val < 10;
});
console.log(newArr2);

// Use .some() to check if any student has scored below 35:
let scored = [45, 60, 28, 90];
let newAns = scored.some(function(val){
    return val < 35;
});
console.log(newAns);

// Use .every to check if all numbers are even:
let even = [2, 4, 6, 8, 10];
let newEven = even.every(function(val){
    return val%2 === 0;
});
console.log("Even:",newEven);

// Destructure this array to get lastName and firstName:
let fullName = ["Ayush", "Jaiswal"];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);

// Merge two arrays using spread operators:
let a = [1,2,3,4,5];
let b = [6,7,8,9,10];
let c = [...a, ...b];
console.log(c);

// Add "INDIA" to the start of this array using spread:
let countries = ["USA", "UK"];
countries = ["INDIA", ...countries];
console.log(countries);

// Clone this array properly (not by reference):
let cl1 = [1,2,3,4];
let cl2 = [...cl1];
console.log(cl1);
console.log(cl2);