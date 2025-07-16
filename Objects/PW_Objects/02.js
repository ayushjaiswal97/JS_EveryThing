// Objects Methods
let emp = {
    id: 101,
    name: "Ayush",
    age: 22
};

// Object.keys
let keys = Object.keys(emp);
console.log(keys);

// Object.values
let values = Object.values(emp);
console.log(values);

// both keys & values pairs in same (Object.entries())
let entries = Object.entries(emp);
console.log(entries);

// Object.freeze()
// Object.freeze(emp);
// emp.id = 100;
// console.log(emp);

// Object.seal()
Object.seal(emp);
emp.id = 100;
console.log(emp);

// Object.assign();
let o = Object.assign({x: 12}, emp);
console.log(o);
