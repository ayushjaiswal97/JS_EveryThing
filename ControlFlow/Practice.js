// Write a function getGrade(score) that:
// ● Takes a student's marks (0 to 100)
// ● Returns a grade based on the following conditions:
// ● 90-100: A+
// ● 80-89: A
// ● 70-79: B
// ● 60-69: C
// ● 30-60: D
// ● 0-29: Fail
// Anything else Invalid Marks ❌

// function getGrade(score){
//     if(score >= 90 && score <= 100){
//         return "A+";
//     } else if(score >= 80 && score <= 89){
//         return "A";
//     } else if(score >= 70 && score <= 79){
//         return "C";
//     } else if(score >= 30 && score <= 69){
//         return "D";
//     } else if(score >= 0 && score <= 29){
//         return "Fail";
//     } else{
//         return "Invalid Marks ❌";
//     }
// }
// let student = getGrade(-1);
// console.log(student);


// using early return

function getGrade(score){
    if(score >= 90 && score <= 100) return "A+";
    if(score >= 80 && score <= 89) return "A";
    if(score >= 70 && score <= 79) return "C";
    if(score >= 30 && score <= 69) return "D";
    if(score >= 0 && score <= 29) return "Fail";
    else return "Invalid Marks ❌";
    }
    let student = getGrade(-1);
    console.log(student);