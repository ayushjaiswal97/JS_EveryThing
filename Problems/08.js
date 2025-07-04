// 🔁 Chapter 5: Loops
// . Print 1 to 10 using for
for(let i = 1; i <= 10; i++){
  // console.log(i);
}
// . Print even numbers between 1 to 20
for(let i = 1; i <= 20; i++){
  if(i%2===0){
    // console.log(i);
  }
}
// .Reverse a string using a loop
let str = "hello";
let reverse = "";

for (let i = str.length-1; i>=0; i--){
  reverse += str[i];
}
console.log(reverse);

// . Sum of all numbers in an array
// . Print all characters of a name using for-of
// . Print all object keys and values using for-in
// . Use continue to skip a specific number
// . Guess number game – use while to ask until correct
// . Pattern: Print a triangle using *
// . Sum of even numbers in an array using forEach