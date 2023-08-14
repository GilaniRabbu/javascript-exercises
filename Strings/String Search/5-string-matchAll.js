// JavaScript String matchAll()

// The matchAll() method returns an iterator containing
// the results of matching a string against a string (or a regular expression).

var text = "An array containing the results of matching a String against a string";

const index = text.matchAll("String");

console.log(Array.from(index));



// ========================================



// If the parameter is a regular expression,
// the global flag (g) must be set, otherwise a TypeError is thrown.

const iterator = text.matchAll(/String/g);

console.log(Array.from(iterator));



// ========================================



// If you want to search case insensitive, the insensitive flag (i) must be set

const match = text.matchAll(/String/gi);

console.log(Array.from(match));



// ========================================