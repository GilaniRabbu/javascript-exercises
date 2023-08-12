// JavaScript Variables

// Variables are Containers for Storing Data

// JavaScript Variables can be declared in 4 ways: Automatically [var] [let] [const]



// ========================================



// Declaring a JavaScript Variable with the [var] or the [let] keyword

var a = 12;
var b = 18;
var c = a + b;

console.log(c);



// ========================================



let num1 = 30;
let num2 = 50;
let num3 = num1 * num2;

console.log(num3);



// ========================================



// One Statement, Many Variables

var person = "Max Payne", carName = "Audi", price = 500;

console.log(person);



// ========================================



// Variables defined with [let] cannot be Re-declared

// Re-declaring a JavaScript variable with [var] is allowed anywhere in a program.

var x = 5; // Now x is 5
var x = 10; // Now x is 10



// ========================================



// Variables defined with [const] cannot be Re-declared

// Variables defined with [const] cannot be Reassigned

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota"; // Change an element

cars.push("Audi"); // Add an element



// ========================================