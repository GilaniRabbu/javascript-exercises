// 1. Built in Function
// - alert()
// - console.log()

// 2. User Defined Function



// Function Expression
let FunExp = function () {
    console.log("Hello World");
}
FunExp();


// ########################################


// Arrow Function
let Arrow = () => {
    console.log("Hello World");
}
Arrow();


// ########################################


// Array iteration using forEach
let word = ["Cake", "Candy", "Fruit", "Bread"];
let print = function (va, it, ab) {
    console.log(va, it, ab);
    // 1st Parameter : Item
    // 2nd Parameter : Index
    // 3rd Parameter : Whole Array
}
word.forEach(print);

// Map
function Map(item) {
    return `${item} is a Food`;
}
let arr = word.map(Map);
console.log(arr);

function Dob(item) {
    return item * item;
}
let num = [1, 2, 3, 4];
let double = num.map(Dob);
console.log(double);


// ########################################


// Object Function
let person = {
    FirstName: "Murat",
    LastName: "Hakim",
    dob: 2001,
    Name: function () {
        return `${this.FirstName} ${this.LastName} and Date of Birth ${this.dob}`;
    }
}
console.log(person.FirstName);
console.log(person.Name());

let str = "Golden";
console.log(str.length);
console.log(str.split());


// ########################################


// Reverse A String
function reverseString(str) {
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let statement = "Hello New World";
console.log(reverseString(statement));

function ReverseFunction(rev) {
    let reversed = "";
    for (let i = rev.length - 1; i >= 0; i--) {
        reversed += rev[i];
    }
    return reversed;
}
console.log(ReverseFunction("Hello World!"));


// ########################################


function addTwo(a) {
    return a + 10;
}

function Divided(b) {
    return b / 3;
}

let res = addTwo(20);
console.log(Divided(res)); // Output 10


// ########################################


// Check If A Number Is Even
function isEven(number) {
    return number % 2 === 0;
}
let result1 = isEven(4);
let result2 = isEven(7);
console.log(result1); // true
console.log(result2); // false


// ########################################


let sound = "";

function laugh(num) {
    for (let i = 0; i < num; i++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(3));

let cry = function myFunction() {
    let sound = "boohoo!";
    return sound;
}

console.log(cry());


// ########################################


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(3));
}

emotions("happy", function (num) {
    let sound = "";
    for (i = 0; i < num; i++) {
        sound = sound + "ha";
    }

    sound = sound + "!";
    return sound;
});