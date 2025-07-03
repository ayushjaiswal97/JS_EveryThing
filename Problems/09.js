// Login message:
// let isLoggedIn = true;
// let isAdmin = false;
// Show different messages based on the combination

let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in.");
} else if (isAdmin) {
  console.log("Welcome, admin!");
} else {
  console.log("Welcome, user!");
}
