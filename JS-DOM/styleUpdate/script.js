// JS se CSS badlna

// Style Update via style and clasList (add, remove, toggle)
let h1 = document.querySelector('h1');
console.log(h1);
// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.fontFamily = "gilroy";
h1.style.fontWeight = "100";
h1.style.textTransform = "capitalize";

// classList

//add()
h1.classList.add("exmpl");

// remove
// h1.classList.remove("exmpl");

// toggle()
h1.classList.toggle("exmpl"); 

// .add()
let heading = document.querySelector('#main-heading');
// heading.classList.add("highlight");

// .remove()
heading.classList.remove("highlight");

// .toggle()
heading.classList.toggle("highlight");

//
let para = document.querySelector('#main');
para.classList.add("parag");
