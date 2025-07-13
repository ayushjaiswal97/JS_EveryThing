// Create a new image element with a placeholder source and add it at the top of a div.
let img = document.createElement('img');
img.setAttribute("src", "https://avatar.iran.liara.run/public/35");
img.classList.add("placeholder");
let div = document.querySelector("div");
div.classList.add("div")
document.querySelector("div").prepend(img);