// 🔵 Level 3: Think & Solve
// Create a variable num = 7. Check if it’s even or odd. Print "Even" or "Odd".
let num = 7;
if(num%2===0){
    console.log("Even");
}else{
    console.log("Odd");
}

// Create a variable birthYear = 2000. Use the current year (2025) to calculate the age.
let birthYear = 2000;
let currentYear = 2025;
let calculateAge = currentYear - birthYear;
console.log(Math.abs(calculateAge));

// Create a variable marks = 85. Print "A" if marks >= 90, "B" if between 80–89, else "C".
let marks = 80;
if(marks >= 90){
    console.log("A");
} else if(marks <= 89 && marks >= 80){
    console.log("B");
}else{
    console.log("C")
}
// Create a variable radius. Calculate and print the area of a circle (π × r²).
let radius = 5;
let area = (Math.PI * (radius * radius));
console.log("Area of a Circle : ", area)

// Create a variable password = "abcd1234". If password length < 8, print "Too short".
let password = "abcd12345";

if (password.length < 8) {
  console.log("Too short");
}else {
  console.log("Password is valid");
}