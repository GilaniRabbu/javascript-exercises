const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

console.log("The largest number is " + largest);



const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));
const number3 = parseFloat(prompt("Enter third number: "));

let large;

if (number1 >= number2 && number1 >= number3) {
    large = number1;
}

else if (number2 >= number1 && number2 >= number3) {
    large = number2;
}

else {
    large = number3;
}

console.log("The largest number is " + large);



function max_of_three(x, y, z) {
    max_val = 0;

    if (x > y) {
        max_val = x;
    }

    else {
        max_val = y;
    }

    if (z > max_val) {
        max_val = z;
    }

    return max_val;
}

console.log(max_of_three(1, 0, 1));

console.log(max_of_three(0, -10, -20));

console.log(max_of_three(1000, 510, 440));