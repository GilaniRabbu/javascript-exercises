// Fibonacci Sequence

// fibonacci[2] = fibonacci[2-1]+fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1]+fibonacci[3-2];
// fibonacci[4] = fibonacci[4-1]+fibonacci[4-2];
// fibonacci[5] = fibonacci[5-1]+fibonacci[5-2];
// fibonacci[6] = fibonacci[6-1]+fibonacci[6-2];

function fibonacciSequence(n) {
    var fibonacci = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        // console.log(fibonacci[i], fibonacci[i - 1], fibonacci[i - 2]);
    }
    return fibonacci;
}

var result = fibonacciSequence(12);

console.log(result);