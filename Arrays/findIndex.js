// Array FindIndex

// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// Predicate — find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

// ThisArg — If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

var numArray = [30, 32, 42, 48, 56, 60, 80, 90];

var result = numArray.findIndex(function (value) {
    return value > 70;
});

document.write(result);