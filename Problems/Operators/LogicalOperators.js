//  Level 4: Logical Operators

// What will be printed?
console.log(true && false); //false
console.log(true || false);  //true
console.log(!false); //true

// What’s the output here?
let age = 20;
if(age > 18 && age < 25){
    console.log("You are elgible");
} else{
    console.log("Not elgible")
}


//Check if a number is divisible by both 2 and 3.
let num = 12;
console.log(num%2===0 && num%3===0);

// Use || to check if either a or b is greater than 10.
let a = 12;
let b = 2;
if(a > 10 || b > 10){
    console.log("Yes");
}else{
    console.log("No")
}

//What does !false return?
console.log(!false);