// JavaScript has only one type of number.
// Numbers can be written with or without decimals.
let a = 3.14;
let b = 3;


// Extra large or extra small numbers can be written with scientific (exponent) notation
let x = 125e5; // 12500000
let y = 125e-5; // 0.00125


// JavaScript Numbers are Always 64-bit Floating Point


// Unlike many other programming languages,
// JavaScript does not define different types of numbers,
// like integers, short, long, floating-point etc.


// JavaScript numbers are always stored as double precision floating point numbers,
// following the international IEEE 754 standard.


// This format stores numbers in 64 bits, where the number (the fraction) is stored in
// bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.


// Value (aka Fraction/Mantissa) - 52 bits (0 - 51)
// Exponent - 11 bits (52 - 62)
// Sign - 1 bit (63)


// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
// The maximum number of decimals is 17.
let num1 = 999999999999999; // 999999999999999
let num2 = 9999999999999999; // 10000000000000000


// Floating Precision
// Floating point arithmetic is not always 100% accurate
let num = 0.1 + 0.2; // 0.30000000000000004
let flo = (0.2 * 10 + 0.1 * 10) / 10; // 0.3


// Adding Numbers and Strings
let str1 = "10" + "20"; // 1020
let str2 = 10 + 25 + "5"; // 355
let str3 = "The Result is " + 10 + 5; // The Result is 105


// JavaScript will try to convert strings to numbers when dividing multiplying subtracting
// JavaScript will NOT convert strings to numbers when adding
let str4 = "100" / "10"; // 10
let str5 = "100" * "10"; // 1000
let str6 = "100" - "10"; // 90


// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN
let nan = 100 / "String"; // NaN

// Use the global JavaScript function isNaN() to find out if a value is a not a number
let isN = 100 / "Text";
let res = isNaN(isN); // true

// NaN is a number: typeof NaN returns number
let spec = NaN; // number


// Infinity
let Inf = 25 / 0; // Infinity
let newInf = Infinity; // Infinity
// Infinity is a number: typeof Infinity returns number


// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let Hex = 0xFF; // 255
// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let myNum = 32;
// let newRes = myNum.toString(36); // Hexatrigesimal - w
// let newRes = myNum.toString(32); // Duotrigesimal - 10
// let newRes = myNum.toString(16); // Hexadecimal - 20
// let newRes = myNum.toString(12); // Duodecimal - 28
// let newRes = myNum.toString(10); // Decimal - 32
// let newRes = myNum.toString(8); // Octal - 40
let newRes = myNum.toString(2); // Binary - 100000


// toPrecision()
let Pre = 3.2536;
let rew = Pre.toPrecision(10); // 3.253600000
console.log(rew, typeof spec);