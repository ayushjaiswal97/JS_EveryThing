// let a = document.querySelector("a");
// a.href = "http://www.google.com"; //

// getAttribute, setAttribute, removeAttribute

// setAttribute
let a1 = document.querySelector("a");
a1.setAttribute('a', 'http://www.google.com');

let img = document.querySelector('img');
img.setAttribute("src",
    "https://images.unsplash.com/photo-1751601727553-8bd4ad69f6b4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
)


// getAttribute
// let a2 = document.querySelector("a");
// console.log(a2.getAttribute("href"));

// removeAttribute
let a = document.querySelector("a");
a.removeAttribute("href");

// .hasAttribute()
let img1 = document.querySelector("img");
console.log(img1.hasAttribute("src"));
console.log(img1.hasAttribute("style"));