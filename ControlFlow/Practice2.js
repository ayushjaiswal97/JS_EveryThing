// Rock-Paper-Scissors logic

function rps (user, computer){ 
    if(user === computer) return "Tie";

    if(user === "rock" && computer === "scissors") return "User Win";
    if(user === "scissors" && computer === "paper") return "User Win";
    if(user === "paper" && computer === "rock") return "User Win";

    return "Computer Win"
}
console.log(rps("rock", "paper"));