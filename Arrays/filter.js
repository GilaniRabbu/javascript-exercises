// Array Filter

// Returns the elements of an array that meet the condition specified in a callback function.

// Predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// ThisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

var numArray = [30, 32, 42, 48, 56, 60, 80, 90];

var result = numArray.filter(function (item) {
    return item < 50;
});

document.write(result);