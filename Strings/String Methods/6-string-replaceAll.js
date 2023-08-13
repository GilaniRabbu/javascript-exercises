// JavaScript String ReplaceAll()

// The replaceAll() method allows you to specify
// a regular expression instead of a string to be replaced.

// If the parameter is a regular expression,
// the global flag (g) must be set, otherwise a TypeError is thrown.

// The replaceAll() method is case sensitive.

// replace() Syntax - str.replaceAll(pattern, replacement)



// ========================================



const text = "Java is awesome. Java is fun.";

let pattern = "Java";

let newText = text.replaceAll(pattern, "JavaScript");

console.log(newText);

pattern = /Java/g;

newText = text.replaceAll(pattern, "JavaScript");

console.log(newText);



// ========================================



const msg = "javaSCRIPT JavaScript";

// All occurrences of javascript is replaced

let patterns = /javascript/gi; // Case-insensitive and global search

let Text = msg.replaceAll(patterns, "JS");

console.log(Text); // Output JS JS



// ========================================