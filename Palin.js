// console.log(hello);
// always use const
// if the need be to change the value
// create a new variable

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Enter the word \n", (word) => {
//   let flag = true;
//   const l = word.length;
//   let word1 = word.toUpperCase();
//   for (let i = 0; i < l / 2; i++) {
//     if (word1.charAt(i) != word1.charAt(l - i - 1)) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(word + " is a Palindrome.");
//   } else {
//     console.log(word + " isn't a Palindrome.");
//   }
//   readline.close();
// });

const str = process.argv[2];
const reversedstr = str.split(" ").reverse().join(" ");
if (str === reversedstr) {
  console.log("Is palindrome");
} else {
  console.log("Isn't palindrome");
}
// console.log(str[2]);
