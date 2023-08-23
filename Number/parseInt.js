// The Number.parseInt() Method

// Number.parseInt() parses a string and returns a whole number.

// If the number cannot be converted, NaN (Not a Number) is returned.

var num = "7.98";

document.write(
    Number.parseInt(num) + "<br>" + Number.parseInt("10 Mile") + "<br>" + Number.parseInt("Mile 10")
)