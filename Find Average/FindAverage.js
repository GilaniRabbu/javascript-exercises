let marks = [55, 58, 62, 65, 77, 80, 85, 92];

let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`Average marks of the class = ${avg}`);