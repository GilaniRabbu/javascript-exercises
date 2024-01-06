// One number is divisible by another using the modulo operator (%).
// The modulo operator returns the remainder of a division operation.

function isDivisible(number, divisor) {
    return number % divisor === 0;
}

let number = 10;
let divisor = 2;

if (isDivisible(number, divisor)) {
    console.log(`${number} is divisible by ${divisor}`);
} else {
    console.log(`${number} is not divisible by ${divisor}`);
}



function findDivisible(start, end, divisors) {
    for (let i = start; i <= end; i++) {
        if (i % divisors === 0) {
            console.log(`${i} is divisible by ${divisors}`);
        }
    }
}

let start = 1;
let end = 9;
let divisors = 3;
findDivisible(start, end, divisors);



// 1. show output from: 1-30
// 2. if the number is divisible by 3 then instead of the number, show 'foo'
// 3. if the number is divisible by 5 then instead of the number, show 'bar'
// 4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}



let i = 1;
while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("BlueHorde");
    } else if (i % 3 === 0) {
        console.log("Blue");
    } else if (i % 5 === 0) {
        console.log("Horde");
    } else {
        console.log(i);
    }
    i++;
}