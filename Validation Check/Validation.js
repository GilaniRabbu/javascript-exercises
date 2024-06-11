function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Please Enter A Number";
    }
    return num1 + num2;
}

// const result = add("Tax", 45); // Please Enter A Number

const result = add(30, 45);

console.log(result);