// JavaScript String search()

// The search() method searches a string for a string
// (or a regular expression) and returns the position of the match

var text = "JavaScript String IndexOf method returns the index!";

// var index = text.search("returns");

var index = text.search(/IndexOf/);

console.log(index); // Output 18