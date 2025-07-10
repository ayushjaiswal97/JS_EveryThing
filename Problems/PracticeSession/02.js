// Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//Print numbers from 10 to 1 using a while loop.
// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// //Print numbers from 10 to 1 using a for loop.
// for(let i = 10; i>0; i--){
//     console.log(i);
// }

// Print even number 1-20 using for loop.
// for(let i = 2; i<21; i+=2){
//     console.log(i)
// }
 
// for(let i = 1; i<21; i++){
//     if(i%2===0){
//         console.log(i);
// 
//     }

//  Print odd number 1-15 using a while loop.
// let i = 1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);
//     }
//     i++;
// }

// Print the multiplication table of 5 (i.e., 5 X 1 = 5) using for loop

// for(let i = 1; i<=10; i++){
//     console.log(`5 X ${i} = ${5*i}`);
// }

// Print the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

// Print all numbers between 1 to 50 that are divisible by 3.
// for(let i = 1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }

// Ask the user for a number and print the whether each number from 1 to that number is even or odd.
// e.g., "1 is odd" , "2 is even"

// let num = prompt("give a number");
// for(let i = 1; i<=num; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

// count how many numbers between 1 to 100 are divisible by both 3 and 5.
for(let i = 1; i<=100; i++){
    if(i%3 === 0 && i%5 ===  0){
        console.log(i);
    }
}