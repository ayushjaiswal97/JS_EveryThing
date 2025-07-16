// Objects
// Method of creating objects

// first
let obj ={
    id: "101",
    name: "Alex",
    salary: 10000
};
console.log(obj);
//Accessing objects
// using Dot Noatation
console.log(obj.id); // 101

//bracket Notations
console.log(obj["name"]); // 'Alex'

// Updating Value
obj.salary = 14000;
console.log(obj);


// deleting id from objects 
delete obj.id;
console.log(obj);

// Another way to creating objects
let emp = new Object();
console.log(emp); // here it is empty objects Output = {}
// How to assign values 
emp.id = 102;
emp.name = "Sam";
emp.salary = 11000;
console.log(emp); // { id: 102, name: 'Sam', salary: 11000 }
emp["salary"] = 15000;
console.log(emp);

// Or other way to create Objects in functions
function Emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
const e = new Emp(103, "Amy", 13000);
console.log(e); // Emp { id: 103, name: 'Amy', salary: 13000 }