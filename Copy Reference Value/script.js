// Copy Reference Value

// Array

var a = [1, 2, 3, 4, 5];

var b = [...a];

b.pop();

console.log(a, b);

// Object

var obj = { name: "Gilani" };

var copyObj = { ...obj };

console.log(copyObj);