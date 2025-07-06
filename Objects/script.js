// Objects 

// Creating an objects:
let obj = {
    name: "Ayush",
    age: 21
};
console.log(obj.name);
obj.course = "JavaScript";
console.log(obj);
obj["Full name"] = "Ayush Jaiswal";
console.log(obj);

// Nesting and deep access:
 const user = {
    name: "harsh",
    address:{
        city: "bhopal",
        pin: 462021,
        location:{
            lat: 23.2,
            lng: 72.3,
        },
    },
 };
 console.log(user.address.location.lat);

 //Object Destructuring
 let {lat, lng} = user.address.location;
 console.log(lat);
 console.log(lng);

 // for nested objects:
 const { name, address:{ city, pincode }} = user;
 console.log(name);
 console.log(city);

 // Loops in Objects: for-in
 let obj2 = {
    name: "Ayush",
    age: 22,
    email: "test@test.com",
 };
 for(let key in obj2){
    // console.log(obj2[key]);
    console.log(key, ": " + obj2[key]);
 }

 // Objects.keys() :-
 console.log(Object.keys(obj2));

 // Object.entries() :-
 console.log(Object.entries(obj2));

//  Object.values() :-
console.log(Object.values(obj2));

// Copying Objects : spread operators, object.assign, deep clone
 
// Spread Opertors:- 
let obj3 = {...obj2};
console.log(obj3);

// Object.assign
let obj4 = Object.assign(obj2);
console.log(obj4);

// Deep Copy (nested levels)
let userOne = {
    name: "Ayush",
    address: {
        city: "Delhi",
        pincode: 110001,
    },
};
let newUser = JSON.parse(JSON.stringify(userOne));
console.log(newUser);

// Optional Chaining
let data = {
    name: "Ayush",
    age: 22,
    email: "ayush@test.com",
    addresses: {
        city: "Delhi",
        pincode: 110001,
    },
};
console.log(data?.address?.city);

// Computer property
let role = "admin";
let userData = {
    name: "Ayush",
    age: 22,
    email: "ayush@test.com",
    addresses: {
        city: "Delhi",
        pincode: 110001,
    },
    [role]: "Ayush",
};
console.log(userData);