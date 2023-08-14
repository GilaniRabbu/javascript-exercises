// JavaScript String match()

// The match() method returns an array containing the
// results of matching a string against a string (or a regular expression).

var text = "An array containing the results of matching a strING against a string";

const index = text.match("ing");

console.log(index.length + " " + index); // Output 1 ing



// ========================================



// Perform a global search

const global = text.match(/ing/g);

console.log(global.length + " " + global); // Output 3 ing,ing,ing



// ========================================



// Perform a global, case-insensitive search

const search = text.match(/ing/gi);

console.log(search.length + " " + search); // Output 4 ing,ing,ING,ing



// ========================================