// JavaScript String startsWith()

// The startsWith() method returns true if a string begins with a specified value.

// Otherwise it returns false.

// startsWith() is case sensitive.

let index = "Hello world, welcome to the universe.";

console.log(index.startsWith("Hello")); // Output true

console.log(index.startsWith("welcome")); // Output false

console.log(index.startsWith("Hello", 0)); // Output true

console.log(index.startsWith("world", 5)); // Output false