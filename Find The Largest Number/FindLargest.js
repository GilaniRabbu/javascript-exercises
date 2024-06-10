// Find the largest of 3 given numbers using JavaScript.

// Approach 1: Using the if-else statements

// The if-else statements used for checking conditions will be used to compare the 3 numbers.
// The variables will be called x, y and z.
// We compare x with y and z, y with x and z, and z with x and y to see which is the largest number.

// Example:
// In the example below it is first checked if x(=5) is greater than y(=10) and z(=15) which is false.
// Then the program checks if z(15) is greater than x(=5) and y(=10) which returns true and hence 15 is the largest.

var x = 10;
var y = 20;
var z = 15;

if (x > y && x > z) {
    console.log("X = " + x + " is the Greatest");
}

else if (z > x && z > y) {
    console.log("Z = " + z + " is the Greatest");
}

else {
    console.log("Y = " + y + " is the Greatest");
}



var a = 450;
var b = 650;
var c = 550;

if (a > b) {
    if (a > c) {
        console.log("A is big");
    }
    else {
        console.log("C is big");
    }
}

else {
    if (b > c) {
        console.log("B is big");
    }
    else {
        console.log("C is big");
    }
}



// Method 2: Using the Math.max function

// The Math.max() function returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

// Our variables named x, y, and z are simply passed to Math.max() and we get the highest of the 3 numbers.

// This function can take multiple arguments and not just 3.

var cos = 5;
var tan = 10;
var cot = 15;

console.log(Math.max(cos, tan, cot) + " is the Greatest");



var business = 450;
var tech = 650;
var doctor = 550;

var ace = Math.max(business, tech, doctor);

console.log(ace + " is the Top Number");



// Method 3:

let myArray = [10, 20, 30, 40, 50];

let max = myArray[0];

for (let i = 0; i < myArray.length; i++) {
    const arr = myArray[i];
    if (arr > max) {
        max = arr;
    }
}

console.log(max);