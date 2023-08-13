// JavaScript String replace()

// The replace() method replaces a specified value with another value in a string

// replace() Syntax - str.replace(pattern, replacement)



// ========================================



const message = "Ball Bat";

let result = message.replace("B", "C"); // Replace the first B with C

console.log(result); // Output Call Bat



// ========================================



// By default, the replace() method is case sensitive.
// Writing WORLD (with upper-case) will not work.

const newMessage = "Hello World";

let res1 = newMessage.replace("WORLD", "JavaScript");

console.log(res1);

// To replace case insensitive, use a regular expression with an [/i] flag (insensitive)

let res2 = newMessage.replace(/WORLD/i, "JavaScript");

console.log(res2); // Output Hello JavaScript



// ========================================



// To replace all matches, use a regular expression with a [/g] flag (global match)

const newMsg = "Hello World, Welcome to new World order!";

let solution = newMsg.replace(/World/g, "JavaScript");

console.log(solution); // Output Hello JavaScript, Welcome to new JavaScript order!



// ========================================