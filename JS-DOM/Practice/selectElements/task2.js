// 1 // Select all <li> elements and print their text using a loop.
let list = document.querySelectorAll('li');

// list.forEach(function(val){
//     console.log(val.textContent);
// });

// using for loop:
for(let i = 0; i<list.length; i++){
    console.log(list[i].textContent);
}