let inp = document.querySelector('input');
inp.addEventListener("input", function(dtls){
    if(dtls.data !== null){
        console.log(dtls.data);
    }
});

//
let slt = document.querySelector('select');
let dvc = document.querySelector("#device");

slt.addEventListener("change", function(dtls){
    dvc.textContent = `${dtls.target.value} Device Selected`
})