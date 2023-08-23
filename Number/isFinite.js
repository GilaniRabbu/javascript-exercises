// isFinite() is a function property of the global object.

// The isFinite() function determines whether a value is finite,
// first converting the value to a number if necessary.
// A finite number is one that's not NaN or ±Infinity.
// Because coercion inside the isFinite() function can be surprising,
// you may prefer to use Number.isFinite().

// false - isFinite(NaN);
// false - isFinite(Infinity);
// false - isFinite(-Infinity);

// true - isFinite(0);
// true - isFinite(910);
// true - isFinite(2e64);

// Would've been false with the more robust Number.isFinite():
// true - isFinite("0");
// true - isFinite(null);

var num = 7.5;

document.write(
    Number.isFinite(num) // true
)