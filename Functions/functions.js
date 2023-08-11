// JavaScript Functions

// A JavaScript function is a block of code designed to perform a particular task.



// ========================================



function hello() {
    console.log("Hello World!");
}
hello();



// ========================================



function Arc(a, b, c) {
    console.log(a, b, c)
}
Arc(50, 150, 250);



// ========================================



function executed(x, y) {
    console.log(x * y)
}
executed(50, 3);



// ========================================



function Number() {
    var number1 = 50;
    var number2 = 30;
    var number3 = number1 + number2;
    document.write(number3 + "<br>");
}
Number();
Number();
Number();



// ========================================



function addText() {
    return "Cascading Style "; // Function Return
}
var newValue = addText() + "Sheets";
console.log(newValue);



// ========================================



function addNumber(num1, num2) {
    var num3 = num1 + num2; // Function Parameter
    console.log(num3);
}
addNumber(10, 20);
addNumber(40, 80);
addNumber(30, 50);



// ========================================



function WriteMyName(name) {
    document.write("<br>" + name); // Function Parameter
}
WriteMyName("Murat");
WriteMyName("Max");
WriteMyName("Kara");



// ========================================