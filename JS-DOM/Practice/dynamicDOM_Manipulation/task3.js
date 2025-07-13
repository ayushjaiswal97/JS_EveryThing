// Create a new list item <li> New task </li> and add it to the end of a <ul>.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerHTML = "New Task";
ul.appendChild(li);