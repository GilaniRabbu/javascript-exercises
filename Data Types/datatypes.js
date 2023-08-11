// Data Types



// ========================================



// When adding a number and a string, JavaScript will treat the number as a string.
var a = 16 + " TGR"; // Output 16 TGR
var a = "TGR " + 15; // Output TGR 15



// ========================================



// JavaScript evaluates expressions from left to right.
// Different sequences can produce different results:

// var a = 30 + 20 + " TGR"; // Output 50 TGR



// ========================================



// JavaScript has dynamic types.
// This means that the same variable can be used to hold different data types:

// var x;  // Now x is undefined
// x = 5;  // Now x is a Number
// x = "Web";  // Now x is a String



// ========================================



// JavaScript Strings
// Strings are written with quotes. You can use single or double quotes:

// var answer = "It's a Strings";



// ========================================



// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:

// var count = 20;



// ========================================



// JavaScript BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store
// integer values that are too big to be represented by a normal JavaScript Number.

// var num = BigInt("123456789012345678901234567890");



// ========================================



// JavaScript Booleans
// Booleans can only have two values: true or false.
// let isGreater = 4 > 5;
// console.log(isGreater); // Output false



// ========================================



// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:

// typeof 2 // Returns "number"
// typeof 5.21 // Returns "number"
// typeof (5 + 5) // Returns "number"

// typeof "" // Returns "string"
// typeof "It's a string" // Returns "string"



// ========================================



// Undefined
// In JavaScript, a variable without a value, has the value undefined.
// The type is also undefined.



// ========================================