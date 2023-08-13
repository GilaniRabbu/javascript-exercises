// Converting a String to an Array

// JavaScript String split()

// A string can be converted to an array with the split() method

let split = "a,b,c,d,e,f,g,h";

const arr = split.split(","); // Comma separated

console.log(arr[2]); // Output c



// ========================================



let text = "Hello";

const myArr = text.split("");

text = "";

for (let i = 0; i < myArr.length; i++) {
    text += myArr[i] + "<br>"
};

document.write(text);



// ========================================