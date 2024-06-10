// Array Splice

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// Start — The zero based location in the array from which to start removing elements.

// DeleteCount — The number of elements to remove.

// Items — Elements to insert into the array in place of the deleted elements.

// Returns — An array containing the elements that were deleted.

var arr = ["A", "B", "C", "D", "E"];

var result = arr.splice(3, 1, "K");

document.write(arr); // Output A,B,C,K,E