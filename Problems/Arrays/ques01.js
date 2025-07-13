// Create an array of your 5 favorite fruits and print it.
let fruits = ["Apple","Banana","Grapes", "Mango", "Litchi"];
console.log(fruits);

// Access the 2nd and 4th items from an array.
console.log(fruits[1]);
console.log(fruits[3]);

// Add an item at the end of the array using .push()
fruits.push("Pineapple");
console.log(fruits);

// Add an item at the beginning of the array using .unshift()
fruits.unshift("Orange")
console.log(fruits);

//Remove the last item using .pop()
fruits.pop();
console.log(fruits)

// Remove the first item using .shift()
fruits.shift();
console.log(fruits);

// Find the length of an array.
console.log(fruits.length);

// Check if a value exists in an array using .includes()
console.log(fruits.includes("Apple"));

// Join array elements into a string using .join()
let fruitString = fruits.join(", ");
console.log(fruitString);

// Reverse an array using .reverse()
fruits.reverse();
console.log(fruits);