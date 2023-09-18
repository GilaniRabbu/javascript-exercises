// Syntax
switch (expression) {
    case value1:
        statements
    case value2:
        statements
    case valueN:
        statements
    default:
        statements
}

// ==============================

const exp = "Papayas";

switch (exp) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected Output: "Mangoes and Papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${exp}.`);
}

// ==============================

const expr = "Papayas";

switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are $2.79 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
console.log("Is there anything else you'd like?");

// ==============================

const Animal = "Giraffe";

switch (Animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal is not extinct.");
        break;
    case "Dinosaur":
        console.log("This is rare animal.");
        break;
    default:
        console.log("This animal is extinct.");
}

// ==============================

const foo = 1;

let output = "Output: ";

switch (foo) {
    case 0:
        output += "So ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output += "Your ";
    case 3:
        output += "Name";
    case 4:
        output += "?";
        console.log(output);
        break;
    case 5:
        output += "!";
        console.log(output);
        break;
    default:
        console.log("Please pick a number from 0 to 5!");
}