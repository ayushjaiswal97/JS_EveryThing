// Declare your name and city using const , and your age using let .
// . Try this and observe the result:
    // let x = 5;
    // let x = 10;

    // let x = 5;
    // let x= 10;
    // console.log(x); // 'x' has already been declared


// . Guess the output:
    console.log(count);
    var count = 42; //undefied
    
// . Create a const object and add a new key to it — does it work?
const object = {
    age: 21,
};

object.age = 22;
console.log(object); // its work

// . Try accessing a let variable before declaring it — what error do you see?
// console.log(name); // reference error due to tdz
// let name = "ayush";

// . Change a const array by pushing a value. Will it throw an error?
const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);