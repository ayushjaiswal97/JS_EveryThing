// Add HTML structure and JavaScript functionality for file upload feature
 
// Selecting button and file input elements from DOM using their IDs
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

// When button is clicked, trigger click on hidden file input
btn.addEventListener("click", function(){
    fileinp.click();
})

// When a file is selected, update button text to show filename
fileinp.addEventListener("change", function(dtls){
    const file = dtls.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})
