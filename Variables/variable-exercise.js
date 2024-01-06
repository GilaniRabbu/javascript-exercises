// Declaring A Variable

// Keyword var let const

let myNum = 10; // A Number
let myString = "Hello, World!"; // A String
let isTrue = true; // A Boolean
let myDecimal = 3.14; // A Decimal
let myArray = [1, 2, 3]; // An Array

// One Statement, Many Variables
let person = "Max Payne", carName = "Audi", price = 500;
console.log(`My Name is ${person}, This is my new car ${carName} and price ${price}`);

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; // Change an element
cars.push("Audi"); // Add an element
console.log(cars); // ['Toyota', 'Volvo', 'BMW', 'Audi']

// Swap Variable
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

// Concatenate Two Strings
let str1 = "Hello";
let str2 = "World!";
console.log(`${str1} ${str2}`);

// Find The Average of Two Numbers
let num1 = 5;
let num2 = 10;
let average = (num1 + num2) / 2;
console.log(average);

// Find The Largest Number In An Array
let myArr = [1, 2, 3, 4, 5];
let max = myArr[0];
for (let i = 1; i <= myArr.length; i++) {
    if (myArr[i] > max) {
        max = myArr[i];
    }
}
console.log(max);

// Find The Length of A String
let String = "Hello World!";
let length = String.length;
console.log(length);