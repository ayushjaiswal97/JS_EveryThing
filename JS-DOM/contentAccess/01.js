// text/content access: innertext, innerHTML, or textContent 

// .innerText
let p = document.querySelector("p");
// console.dir(p);
p.innerText = "Hey, Dude";
// p.hidden = true;

// .textContent()
let h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Hello Ayush badhiya hai";

//
let h2 = document.querySelector("h2");
h2.innerHTML = "<i>I'm fine!</i>";