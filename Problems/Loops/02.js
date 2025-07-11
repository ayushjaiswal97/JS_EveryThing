// Level 2: Loop with Logic
// Check and print whether each number from 1 to 20 is even or odd.
for(let i = 1; i<=20; i++){
    if(i%2===0){
    //     console.log(`${i} is even`)
    } else{
    //     console.log(`${i} is odd`)
    }
}

// Print the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i = 1; i<=100; i++){
    sum += i;
}
// console.log(sum);

// Print only the multiples of 3 between 1 and 30.

for(let i=1; i<=30; i++){
    if(i%3===0){
        // console.log(i);
    }
}

// Print squares of numbers from 1 to 10 (like 1 4 9 16...).
for(let i =1; i<=10; i++){
    // console.log(`Square of ${i} is ${i * i}`);
}

// Print all numbers from 1 to 50 except multiples of 5 (use continue).
for(let i = 1; i<=50; i++){
    if(i%5===0){
        continue;
    }
    console.log(i);
}