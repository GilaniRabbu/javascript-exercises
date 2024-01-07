// Global & Local Scope - Shadowing

// Global
let x = 1;
function add() {
    x = x + 7;
}
add();
x = x + 2;
console.log(`Count - ${x}`);

//  Local
let k = 1;
function Add() {
    var k = k + 7;
}
Add();
k = k + 2;
console.log(`Count - ${k}`);



// ########################################



// Function Return
function even(num) {
    if (num % 2 === 0) {
        return num;
    }
    else {
        return num * 2;
    }
}
let res = even(13);
console.log(`Result - ${res}`);

function isEven(num) {
    let result;
    if (num % 2 === 0) {
        result = num;
    }
    else {
        result = num * 2;
    }
    return result;
}
let result = isEven(15);
let Square = result * result;
console.log(`Result - ${Square}`);



// ########################################



// Find Even
function evenAll(num1) {
    for (let i = 0; i < num1.length; i++) {
        const num = num1[i];
        if (num % 2 === 0) {
            console.log(num, "Even");
        }
        else {
            console.log(num * 2, "Odd");
        }
    }
}
num1 = [12, 1, 3, 45, 20, 30];
evenAll(num1);
Age = [17, 18, 21, 25, 26, 30];
evenAll(Age);



// ########################################



// Callback Function
function callbackFunction(name, age, task) {
    console.log(`Hello ${name}`);
    console.log(`Your Age ${age}`);
    task();
}
function scrollFB() {
    console.log(`Scroll Facebook`);
}
function Eat() {
    console.log(`Eating Delicious Food`);
}
function Drink() {
    console.log(`Drink Water`);
}
callbackFunction("Hakim", 25, scrollFB);
callbackFunction("Max", 20, Eat);
callbackFunction("Tom", 15, Drink);

function welcomeGuest(name, greetHandler) {
    greetHandler(name);
}
function greetMorning(name) {
    console.log("Good Morning", name);
}
function greetAfternoon(name) {
    console.log("Good Afternoon", name);
}
const Names = "Max";
welcomeGuest(Names, greetMorning);
welcomeGuest("Hakim", greetAfternoon);



// ########################################



// Arguments Function
function AddNum(num1, num2) {
    console.log(arguments[2]); // 12
    return num1 + num2;
}
var resArg = AddNum(5, 10, 12, 15);
console.log(resArg); // 15

function addNum(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num); // 5 10 12 15
        sum += num;
    }
    // return num1 + num2;
    return sum; // Find Sum
}
var Result = addNum(5, 10, 12, 15);
console.log(Result);

function getFullName(firstName, secondName) {
    let fullName = "";
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName += namePart;
    }
    return fullName;
}
let Name = getFullName("Murat ", "Bin ", "Osman ", "Ibn ", "Suleiman");
console.log(Name);