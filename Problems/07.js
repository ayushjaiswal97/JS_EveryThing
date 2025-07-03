//. Student grade logic:
// Write a program that prints A, B, C, D, or F based on marks

let marks = 70;

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <= 79) {
  console.log("C");
} else if (marks >= 30 && marks <= 69) {
  console.log("D");
} else if (marks >= 0 && marks <= 29) {
  console.log("F");
} else {
  console.log("Invalid marks");
}
