// Break and continue

//Q1 Stop first multiple of 7
// write a loop from 1 to 100 that: 
// -> prints each number
// -> stops completely when it finds the first number divisible by 7

// for(let i = 1; i <= 100; i++){
//     console.log(i);
//     if(i%7 === 0){
//         break;
//     }
// }

//Q2.Write a loop from 1 to 20 that:
// Skips numbers divisible by 3
// Prints all others

// Use continue

//// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

// for(let i = 1; i<=20; i++){
//     if(i%3 === 0){
//         continue;
//     }
//     console.log(i);
// }


// Q3: Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
//Prints only 5 odd numbers
//Then stops the loop

 // Use both if, continue, and a counter + break

 // Expected output:
// 1 3 5 7 9

let counter = 0;
for(let i = 1; i<=100; i++){
    if(i%2 === 1){
        counter++;
        console.log(i);
    }
    if(counter === 5){
        break;
    }
}