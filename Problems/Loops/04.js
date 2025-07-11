// 🔵 Level 4: Loop with Strings & Arrays
// Loop through a string "hello" and print each character.
let str = "Hello"
for(let i =0; i<=str.length-1; i++){
    console.log(str[i]);
}

// Count how many vowels are in the string "javascript" using a loop.
let s = "Javascript";
let count = 0;
for(let i = 0; i < s.length; i++){
    let char = s[i].toLocaleLowerCase();
    
    if(char === 'a' || char === 'e' || char === 'i' || char === 'i' || char === 'u'){
        count++;
    }
}
console.log(`Number of vowels in the ${count}`);


// Given an array:
// Use a for...of loop to print each fruit.
let fruits = ["apple", "banana", "mango"];
for(let fruit of fruits){
    console.log(fruit);
}

// Use a for...in loop to print keys of this object:
let person = { name: "Ayush", age: 22, isStudent: true };
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
