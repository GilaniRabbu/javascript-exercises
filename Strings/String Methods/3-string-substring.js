// Javascript String substring()

// The substring() method returns a specified part of the string between start and end indexes.

// substring() Syntax - substring(start, end)

// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().



// ========================================



const message = "JavaScript String Substring";

let result = message.substring(0, 10); // Get the substring starting from index 0 to 10

console.log(result); // Output JavaScript



// ========================================



const string = "JavaScript String substring";

let substr1 = string.substring(0, 1); // First character

console.log(substr1); // Output J



// ========================================



let substr2 = string.substring(1, 0); // If start > end, they are swapped

console.log(substr2); // Output J



// ========================================



let substr3 = string.substring(11); // From 11th to last character

console.log(substr3); // Output String substring



// ========================================



let substr5 = string.substring(0, string.length - 1);

console.log(substr5); // Output JavaScript String substrin



// ========================================