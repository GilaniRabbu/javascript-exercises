// Fibonacci Sequence
// Recursive Function

function Recursive(m) {
    if (m == 0) {
        return 0;
    }
    if (m == 1) {
        return 1;
    }
    else {
        return Recursive(m - 1) + Recursive(m - 2);
    }
}

var result = Recursive(10);

console.log(result);