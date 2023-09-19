// Factorial in Javascript
// Recursive Function

// for (var i = 10; i >= 1; i--) {}

// 5! = 1*2*3*4*5
// 5! = (5-1)! * 5

function factorial(m) {
    if (m == 0) {
        return 1;
    }
    else {
        return m * factorial(m - 1);
    }
}
var result = factorial(10);
console.log(result);