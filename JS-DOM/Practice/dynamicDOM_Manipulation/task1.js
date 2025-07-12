// what does createElement() do? What's returned?
let h1 = document.createElement('h1');
console.log(h1);

//What's the difference between appendchild() and prepend()
// prepend()
let h3 = document.createElement("h3");
h3.textContent = "Hello from prepend!";
document.querySelector("body").prepend(h3);

// appendchild() 
let para = document.createElement("p");
para.textContent = "Hey How are you!";
document.querySelector('body').appendChild(para);