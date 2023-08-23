// The valueOf() Method

// valueOf() returns a number as a number.

// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code.

// All JavaScript data types have a valueOf() and a toString() method.

let a = 120;

document.write(
    a.valueOf() + "<br>" + (120).valueOf() + "<br>" + (110 + 10).valueOf()
)