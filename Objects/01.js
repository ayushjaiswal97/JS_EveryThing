// Create an object for a student with name, age, and isEnrolled.
let student = {
    name: "Ayush",
    age: 22,
    isEnrolled: true,
};
console.log(student);

// Can an object key be a number or boolean? Try this
// const obj = {
//     true: "yes",
//     42: "answer",
// };
// console.log(obj[42]); //yes

const obj = {
    true: "yes",
    42: "answer",
};
console.log(obj[42]);
console.log(obj[true]);

// Access the value of "first-name" from this object:
const user = {
"first-name": "Harsh",
};
console.log(user["first-name"]);

// Given a dynamic key let key = "age", how will you access user [key]?
let key = "age";
const user1 = {
    age: 22,
};
console.log(user1[key]);

// From the object below, print the latitude:
    const locations = {
     city: "Bhopal",
     coordinates: {
     lat: 23.2,
     lng: 77.4,
    },
 };
 console.log(locations.coordinates.lat);

 // Destructure the city and lat from the location object above:
 let {city} = locations;
 let {lat} = locations.coordinates;
 console.log(city);
 console.log(lat);

 // Destructure the key "first-name" as a variable called firstName.
const users = {
"first-name": "Harsh",
};
let { "first-name": firstName } = users;
console.log(firstName);

// Use for-in to log all keys in this object:
const course = {
title: "JavaScript",
duration: "4 weeks",
};
for(let key in course){
    console.log(key);
}

// Use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks

const courses = {
    title: "Javascript",
    duration: "4 weeks"
}
Object.entries(courses).forEach(function(val){
    // console.log(val);
    console.log(val[0] + " : " + val[1]);
});

// Copy the original objects
let original = { a : 1 , b : 2 };
let copy = {...original};
console.log(copy)

//
const obj1 = { info: { score: 80 } };
// const clone = { ...obj1 };
// clone.info.score = 100;
// console.log(obj1.info.score); // 100

// deep clone the obj1 saftely
let newObj = JSON.parse(JSON.stringify(obj1));
newObj.info.score = 100;
console.log(obj1);
console.log(newObj)

// Rewrite this safely using optional chaining:
const person = {};
// console.log(person.profile.name); // X
console.log(person?.profile?.name);

// Use a variable to dynamically assign a property
const keys = "role";
let oj = {
    name : "Ayush",
    [key] : "admin",
};
console.log(oj);


