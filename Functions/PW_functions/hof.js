// Higher order functions

// Take another functions as an arguments
const powerTwo = (n) => {
    return n ** 2;
}
 function powerCube(powerTwo, n){
    return powerTwo(n) * n;
 }
 console.log(powerCube(powerTwo, 3));

 // returns another functions
 function sayHello(){
    return () => {
        console.log("Hello, Ayush!")
    }
 }
 let guessValue = sayHello();
 console.log(guessValue);
guessValue();

// 
const highOrder = (n) => {
    const oneFun = m =>{
        const twoFun = p =>{
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}
console.log(highOrder(2)(3)(5));

// 
const myNums = [2,3,4,5];
const sumArray = arr => {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}
console.log(sumArray(myNums));

// setInterval() & setTimeOut()
function oneMoreHello(){
    console.log("Hello, Akash!")
}
// setInterval(oneMoreHello, 1000);
setTimeout(oneMoreHello, 5000)