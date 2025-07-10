// let h1 = document.createElement("h1");
// h1.textContent = "Hello How are you?";
// // document.body.appendChild(h1);
// document.body.prepend(h1);

const p = document.createElement("p");
p.textContent = "Hello from JavaScript!";
// document.querySelector("body").prepend(p);
document.querySelector("body").append(p);


const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);

