let dividend = parseInt(52);
let divisor = parseInt(5);

if (isNaN(dividend) || isNaN(divisor)) {
    console.log("Please enter valid integers.");
} else if (divisor === 0) {
    console.log("Divisor cannot be zero.");
} else {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    console.log(`Quotient: ${quotient}, Remainder: ${remainder}`);
}