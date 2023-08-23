// The Number.isSafeInteger() Method

// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

document.write(
    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890)
)