// 🧭 Chapter 4: Control Flow:

//. Student grade logic:
// Write a program that prints A, B, C, D, or F based on marks

let marks = 70;

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <= 79) {
  console.log("C");
} else if (marks >= 30 && marks <= 69) {
  console.log("D");
} else if (marks >= 0 && marks <= 29) {
  console.log("F");
} else {
  console.log("Invalid marks");
}


//. Rock-paper-scissors:
// Given player1 and player2's choice, print the winner or draw

// let player1 = prompt("Player1: Enter your choice (rock, paper, scissors");
// let player2 = prompt("Player2: Enter your choice (rock, paper, scissors");

// if (player1 === player2) {
//     console.log("It's a draw!");
//   } else if (
//     (player1 === "rock" && player2 === "scissors") ||
//     (player1 === "scissors" && player2 === "paper") ||
//     (player1 === "paper" && player2 === "rock")
//   ) {
//     console.log("Player 1 wins!");
//   } else {
//     console.log("Player 2 wins!");
//   }


  // Login message:
// let isLoggedIn = true;
// let isAdmin = false;
// Show different messages based on the combination

let isLoggedIn = true;
let isAdmin = false;

if(isLoggedIn &&isAdmin){
  console.log("Welcome admin, You have full access");
}
else if(isLoggedIn && !isAdmin){
  console.log("Welcome User! You are logged in.");
} else{
  console.log("Please log in to continue.");
}


//. Weather advice:
// let weather = "rainy";
// Use switch-case to print what to wear

let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("Wear sunglasses and light wear");
        break;
    case "rainy":
        console.log("Take a umbrella and wear a raincoat.");
        break;
    case "cold":
        console.log("Wear a jacket and sweater.");
        break;
    default:
        console.log("Check the weather and dress appropriately.");
}

// . Age checker:
// Return "Kid", "Teen", "Adult", or "Senior"
function ageChecker(age) {
if(age >= 0 && age <= 13) return "Kid";
if(age >= 13 && age <= 19) return "Teen";
if(age >= 20 && age <= 59) return "Adult";
if(age >= 60) return "Senior";
 return "Invalid Age";
}
let result = ageChecker(19);
console.log(result);