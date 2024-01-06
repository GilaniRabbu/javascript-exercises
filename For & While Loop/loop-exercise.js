// Use Break
for (let i = 0; i <= 5; i++) {
    if (i === 4) {
        break;
    }
    console.log(i); // 0 1 2 3
}



// Find Total
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum); // Total 55



let msg = "Hello World!";
for (const key in msg) {
    console.log(`The Item No of ${key} is ${msg}`);
    // Call key Get Index And Call msg Get Value
}

let loop = "Hello World!";
for (const item of loop) {
    console.log(item);
    // Call item Get Value
}

let object = {
    art: "Bowl",
    cut: "Wood",
    exp: 20
}

for (const x in object) {
    console.log(`The Index of ${x} is Output ${object[x]}`);
}



// Nested Loop
for (let i = 0; i < 5; i++) {
    for (let l = 0; l < 5; l++) {
        console.log(i + "-" + l);
    }
}



// initial value of the row
let row = 0;
// initial value of the seat within a row
let seat = 0;
for (row = 0; row <= 7; row++) {
    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
    for (seat = 0; seat <= 5; seat++) {
        console.log(row + " - " + seat);
    }
}



// Find Square Sum
let content = parseInt(25.325);
// let content = parseInt(prompt("Enter the Number for Loop: "));
let sums = 0;
let output = "";
for (let i = 0; i <= content; i++) {
    sums += i ** 2;
    output += (i ** 2).toString();
    if (i == content) { continue; }
    output += " + ";
}
console.log(`${output} = ${sums}`);



// Countdown, Liftoff!
// Let us take an iteration variable, that represent the remaining Time in seconds
let c = 60;
// While loop with a stop condition
while (c >= 0) {
    if (c === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (c === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (c === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (c === 10) {
        console.log("Activate main engine hydrogen burn off system");
    } else if (c === 6) {
        console.log("Main engine start");
    } else if (c === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + c + " seconds");
    }
    c--;
}



// Bottles of Juice
let num = 5;
while (num >= 1) {
    // Last iteration. Note occurrence of bottle, bottle, bottles
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurrence of bottles, bottles, bottle
    else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurrence of bottles, bottles, bottles
    else {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num--;
}



const character = "R";
const timesToRepeat = 5;
let answer = "";
for (let i = 0; i < timesToRepeat; i++) {
    answer += character;
}
console.log(answer);