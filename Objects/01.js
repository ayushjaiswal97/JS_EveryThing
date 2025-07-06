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

 // Destructure the key "first-name" as a variable called
firstName.
const users = {
"first-name": "Harsh",
};


