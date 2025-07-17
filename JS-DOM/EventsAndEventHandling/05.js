// submit
let form = document.querySelector("form");
let inpt = document.querySelectorAll("input")
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement('img');
    img.setAttribute("src",inpt[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inpt[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inpt[2].value;
    let p = document.createElement("p");
    p.textContent = inpt[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inpt.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
        
    })
});