// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Syntax - array.forEach(function(currentValue, index, arr), thisValue)

var numArray = [30, 32, 42, 48, 56, 60, 80, 90];

numArray.forEach(function (item) {
    document.write(item + "<br>")
});