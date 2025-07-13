// 20. Select the first item in a list and delete it from the DOM.

let div = document.querySelector('div');
div.style.backgroundColor = "red";
let ul = document.querySelector('ul');
let li = document.querySelector('li');
ul.removeChild(li);
