// JavaScript String slice()

// The slice() method extracts and returns a section of a string.

// slice() Syntax - slice(start, end)



// ========================================



const message = "JavaScript is fun";

let result = message.slice(0, 10); // slice the substring from index 0 to 10

console.log(result); // Output JavaScript



// ========================================



const str = "JavaScript is a very absurd programming language.";

// From index 28 to end
console.log(str.slice(28)); // Output programming language.

// From index 4 to 15
console.log(str.slice(4, 15)); // Output Script is a



// ========================================



const str1 = "JavaScript is a very absurd programming language.";

// From 9th to last element till end
console.log(str1.slice(-9)); // Output language.

// From 9th to last element to 2nd to last element
console.log(str1.slice(-9, -1)); // Output language



// ========================================