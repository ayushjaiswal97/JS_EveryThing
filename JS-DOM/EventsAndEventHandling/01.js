// addEventListener
let clk = document.querySelector('h1');
clk.addEventListener("click", function(){
    clk.style.color = "red";
})

// 
let p = document.querySelector('p');
p.addEventListener("dblclick", function(){
    p.style.color = "green";
});

// removeListener
let h2 = document.querySelector('h2');

function dblclick(){
    h2.style.color = "yellow";
}

h2.addEventListener("dblclick", dblclick);
h2.removeEventListener("dblclick", dblclick);