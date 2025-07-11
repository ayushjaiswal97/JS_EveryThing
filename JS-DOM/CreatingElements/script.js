let h1 = document.createElement('h1');
h1.textContent = "Hello ji";
// document.body.appendChild(h1); //appendchild krne pe script ke bd me aata hai
document.body.prepend(h1); // prepend krne pe script ke phle aajata hai 
// console.log(h1);

let h2 = document.createElement('h2');
h2.textContent = "Hello, how are you!!";
// document.querySelector("body").append(h2);
document.querySelector("body").prepend(h2);