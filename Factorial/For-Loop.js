// Factorial in Javascript
// For Loop & Function

var factorial = 1;
for (var i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
}



function facto(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var result = facto(5);
console.log(result);