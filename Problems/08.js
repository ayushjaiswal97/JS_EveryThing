//. Rock-paper-scissors:
// Given player1 and player2's choice, print the winner or draw

let player1 = prompt("Player1: Enter your choice (rock, paper, scissors");
let player2 = prompt("Player2: Enter your choice (rock, paper, scissors");

if (player1 === player2) {
    console.log("It's a draw!");
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    console.log("Player 1 wins!");
  } else {
    console.log("Player 2 wins!");
  }
