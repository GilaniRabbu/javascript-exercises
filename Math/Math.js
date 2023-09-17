// JavaScript Math Object

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math);



console.log("The value of Math E", Math.E);
// E: 2.718281828459045
// LN10: 2.302585092994046
// LN2: 0.6931471805599453
// LOG10E: 0.4342944819032518
// LOG2E: 1.4426950408889634
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951



let a = 35.8755; // round - Output 36
let b = 25.2205; // round - Output 25
console.log(a, b);
console.log(Math.round(a), Math.round(b)); // Returns x rounded to its nearest integer



// Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(8, 4)); // 4096
console.log(Math.pow(9, 3)); // 729



// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random());



let x = 40;
let y = 50;
let r = x + (y - x) * Math.random();
console.log(r);



console.log(Math.sqrt(36)); // Square root
console.log(Math.sqrt(64)); // Square root
console.log(Math.sqrt(81)); // Square root



console.log(Math.ceil(5.8)); // Ceil // Returns x rounded up to its nearest integer (6)
console.log(Math.floor(5.8)); // Floor // Returns x rounded down to its nearest integer (5)



// Math.abs() returns the absolute (positive)
console.log(Math.abs(5.55)); // Output 5.55
console.log(Math.abs(-5.55)); // Output 5.55



console.log(Math.min(4, 5, 6)); // Min
console.log(Math.min(14, 5, 16)); // Min
console.log(Math.max(4, 5, 6)); // Max
console.log(Math.max(14, 5, 16)); // Max



console.log(Math.sin(Math.PI / 2));
console.log(Math.tan(Math.PI / 2));
console.log(Math.cos(Math.PI / 2));
