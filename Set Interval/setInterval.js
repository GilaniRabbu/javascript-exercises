// The setInterval() method repeats a block of code at every given timing event.

// 1 second = 1000 milliseconds.

// setInterval(function, milliseconds)

function setTime() {
    console.log("Hello World");
};
setInterval(setTime, 2000);



// ========================================



// function showTime() {
//     let newDate = new Date();
//     let Time = newDate.toLocaleTimeString();
//     console.log(Time);
// };
// setInterval(showTime, 5000);



// ========================================



function Timer() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
};

let stopInterval = setInterval(Timer, 1000);

function stopTimer() {
    clearInterval(stopInterval);
}



// ========================================



let myInterval = setInterval(setColor, 500);

function setColor() {
    let bg = document.body;
    bg.style.backgroundColor = bg.style.backgroundColor == "lightgreen" ? "skyblue" : "lightgreen";
}

function stopColor() {
    clearInterval(myInterval);
}



// ========================================



// clearInterval(intervalID)

// If you want to stop this function call, then you can use the clearInterval() method.

// Program to stop the setInterval() method after five times

let count = 0;

// Function creation
let interval = setInterval(function () {

    // Increasing the count by 1
    count += 1;

    // When count equals to 5, stop the function
    if (count === 5) {
        clearInterval(interval);
    }

    // Display the current time
    let currentTime = new Date();

    let localTime = currentTime.toLocaleTimeString();

    console.log(localTime);

}, 2000);



// ========================================



// setInterval(function, milliseconds, parameter1, parameter2);

function greet(name, lastName) {
    console.log("Hello" + " " + name + " " + lastName);
};
setInterval(greet, 1000, "David", "Max");



// ========================================