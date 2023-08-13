// JavaScript Strings

// JavaScript strings are for storing and manipulating text.

// A JavaScript string is zero or more characters written inside quotes.

var a = "JavaScript Strings";

console.log(typeof a);



// ========================================



// Backslash Escape Character, [\'] [\"] [\\]

var c = "Lorem ipsum dolor \"sit\" ame consectetur";

console.log(c);



// ========================================



// JavaScript Strings as Objects

let x = "John"; // x is a string

let y = new String("John"); // y is an object

console.log(typeof x + " " + typeof y);

console.log(x == y); // Output true; // When using the == operator, x and y are equal

console.log(x === y); // Output false; // When using the === operator, x and y are not equal



// ========================================



var k = new String("Take");

var l = new String("Take");

// Comparing two JavaScript objects always returns false.

console.log(k == l); // Output false;

console.log(k === l); // Output false;



// ========================================