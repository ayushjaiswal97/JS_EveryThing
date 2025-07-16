// Id
let var1 = document.getElementById('one');
// console.log(var1.innerText);
console.log(var1.innerHTML);


// class
let var2 = document.getElementsByClassName("tech");
// console.log(var2);
console.log(var2[1].innerText);
var2[1].innerText = "NodeJs";

// Tag Name
let var3 = document.getElementsByTagName("h4");
console.log(var3[1].innerText);
var3[1].innerText = "Hello from PW skills";
var3[1].style.color = "red";

// Query Selectors
let cls = document.querySelector(".class");
console.log(cls);

let id = document.querySelector("#id");
console.log(id);