# JavaScript

- JavaScript is a high-level, dynamic, and interpreted programming language that is widely used for client-side web development.
- It is an object-oriented language that provides features such as variables, arrays, loops, functions, and objects.
- JavaScript can be used to add interactivity to websites, validate forms, and perform asynchronous tasks through its support for event handling.
- The code is executed by the browser and can interact with HTML and CSS to dynamically update the content and style of web pages.
- JavaScript is often used in combination with other technologies such as React, Angular, and Vue to build complex web applications.


## <br>


### Create a variable and assign it a value

```js
let myVariable = 5;

// Create an if-else statement
if (myVariable > 10) {
    console.log("myVariable is greater than 10");
} else {
    console.log("myVariable is less than or equal to 10");
}
```


## <br>


### Create a function

```js
function myFunction(x) {
    return x * x;
}

// Call the function
let result = myFunction(5);

// Output the result
console.log(result); // 25
```


## <br>


### Create an array

```js
let myArray = [1, 2, 3, 4, 5, 6];

// Loop through the array
for (let i = 10; i < myArray.length; i++) {
    console.log(myArray[i]);
}
```


## <br>


### Create an object

```js
let myObject = {
    name: "John",
    age: 20,
    color: "blue"
};

// Access an object property
console.log(myObject.name); // John
```


## <br>


### Create an event listener

```js
document.addEventListener("click", function (event) {
    console.log("You clicked on the document!");
});
```

#### Example

```html
<p id="example">This is some text.</p>
<button id="btn">Click me</button>
```

```js
var btn = document.querySelector("#btn");
var example = document.querySelector("#example");
btn.addEventListener("click", function () {
    example.innerHTML = "The text has changed!";
});
```


## <br>


### Create a try-catch statement

```js
try {
    // Attempt to execute some code
    console.log("This will execute first");
} catch (error) {
    // Handle any errors that occur
    console.log("An error occurred: " + error);
}
```


## <br>


### Create a class

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class
let person = new Person("John", 20);

// Call a method on the instance
person.sayHello(); // Hello, my name is John and I am 20 years old.
```


## <br>


### Create a function that takes two parameters

```js
function addNumbers(x, y) {
    return x + y;
}

// Call the function
let results = addNumbers(5, 10);

// Output the results
console.log(results); // 15
```


## <br>


### Create a switch statement

```js
let myNumber = 5;

switch (myNumber) {
    case 1:
        console.log("Number is 1");
        break;
    case 2:
        console.log("Number is 2");
        break;
    case 5:
        console.log("Number is 5");
        break;
    default:
        console.log("Number is not 1, 2 or 5");
        break;
}
```


## <br>


### Create a for-in loop

```js
let newObject = {
    name: "John",
    age: 20
};

for (let key in newObject) {
    console.log(`${key}: ${newObject[key]}`);
}
```


## <br>


### Create a while loop

```js
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
```


## <br>


### Create a do-while loop

```js
let l = 0;

do {
    console.log(l);
    l++;
} while (l < 10);
```


## <br>


### Create an array

```js
let MyArray = [1, 2, 3, 4];

// Loop through the array using forEach
MyArray.forEach(function (number) {
    console.log(number);
});
```


## <br>


### Create an async function

```js
async function getData() {
    let response = await fetch("https://www.youtube.com/");
    let data = await response.json();
    console.log(data);
}

// Call the async function
getData();
```


## <br>


### Making AJAX Requests

```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com/data", true);
xhr.send();
```