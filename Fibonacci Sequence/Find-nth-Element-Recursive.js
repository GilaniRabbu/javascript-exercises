// Fibonacci Sequence
// Find nth Element with Recursive Function

function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var fib = fibonacci(n - 1);
        var nextElement = fib[n - 1] + fib[n - 2];
        fib.push(nextElement);
        return fib;
    }
}

var result = fibonacci(10);

console.log(result);