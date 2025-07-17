// keyup
const input = document.getElementById("username");
const preview = document.getElementById("preview");

input.addEventListener("keyup", function () {
  preview.textContent = "You typed: " + input.value;
});
