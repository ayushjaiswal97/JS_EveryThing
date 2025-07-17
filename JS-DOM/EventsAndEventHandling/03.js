// keydown
let h1 = document.querySelector('h1');

window.addEventListener("keydown", function(dtls){
    if(dtls.key === " "){
        h1.textContent = "SPC";
    } else{
        h1.textContent = dtls.key;
    }
});