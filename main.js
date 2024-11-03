var prompt = require("prompt-sync")();
const age = prompt("enter your age");
if (age < 18) {
  console.log("20% discount !!!");
} else {
  console.log("your got 50% discount");
}
