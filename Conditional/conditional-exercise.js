// Find the Largest
// let num1 = prompt("Enter First Number ");
// let num2 = prompt("Enter Second Number ");
// let num3 = prompt("Enter Third Number ");
let num1 = 20;
let num2 = 30;
let num3 = 25;

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("Number 1");
    } else {
        console.log("Number 3");
    }
} else {
    if (num2 >= num3) {
        console.log("Number 2");
    } else {
        console.log("Number 3");
    }
}

if (num1 >= num2 && num1 >= num3) {
    console.log("Num 1 is the Largest Number");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Num 2 is the Largest Number");
} else {
    console.log("Num 3 is the Largest Number");
}



let choice = "A";
let txt;
switch (choice) {
    case "A"
        : txt = "Int 1 Sel";
        break;
    case "B"
        : txt = "Int 2 Sel";
        break;
    case "C"
        : txt = "Int 3 Sel";
        break;
    case "D"
        : txt = "Int 4 Sel";
        break;
    case "E"
        : txt = "Int 5 Sel";
        break;
    case "F"
        : txt = "Int 6 Sel";
        break;
    default
        : txt = "You Fail";
        break;
}
console.log(choice);



// Even or Odd
let number = 21;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}



// Musical Groups
let musicians = 5;
if (musicians <= 0) {
    console.log("Not a group");
} else if (musicians === 1) {
    console.log("Solo");
} else if (musicians === 2) {
    console.log("Duet");
} else if (musicians === 3) {
    console.log("Trio");
} else if (musicians === 4) {
    console.log("Quartet");
} else if (musicians >= 5) {
    console.log("This is a large group");
} else {
    console.log("It's not exist");
}



// Logical Operators
let colt = "not busy";
let weather = "nice";
if (colt === "not busy" && weather === "nice") {
    console.log("Go to the park");
} else {
    console.log("Stay Home");
}



// Checking Your Balance
let balance = 325.198;
let checkBalance = true;
let isActive = true;
if (checkBalance == true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0) {
        console.log("Your account is empty.");
    }
    else if (isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
    }
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}



// Ice Cream
let flavor = "strawberry";
let vessel = "cone";
let toppings = "cookies";
if ((flavor === "strawberry" || flavor === "vanilla") && (vessel === "cone" || vessel === "bowl") && (toppings === "cookies" || toppings === "peanuts")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}



// What do I Wear?
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
let size = "";
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "S";
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = "L";
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
}
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);



// Falling Through
var tier = "nsfw deck"; // if tier = "none", then output is default
var output = "You’ll receive ";
switch (tier) {
    case "deck of legends":
        output += "a custom card, ";
    case "collector's deck":
        output += "a signed version of the Exploding Kittens deck, ";
    case "nsfw deck":
        output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
    default:
        output += "one copy of the Exploding Kittens card game.";
}
console.log(output);



// Back to School
var education = 'no high school diploma';
var salary = 0;
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");



// Ternary Operator
// The ternary operator provides you with a shortcut
// alternative for writing lengthy if...else statements.
// conditional ? (if condition is true) : (if condition is false)

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;
var category = eatsAnimals ? (eatsPlants ? "omnivore" : "carnivore") : (eatsPlants ? "herbivore" : "undefined");
console.log(category);