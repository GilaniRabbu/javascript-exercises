// Factorial in Javascript
// While Loop & Function

var i = 1;
var factorial = 1;
while (i <= 10) {
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}
// console.log(factorial);



function facto(n) {
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        // console.log(i, fac);
        i++;
    }
    return fact;
}
var result = facto(10);
console.log(result);