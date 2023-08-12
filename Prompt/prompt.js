// Window prompt() Method

// prompt() instructs the browser to display a dialog with an optional message
// prompting the user to input some text, and to wait until
// the user either submits the text or cancels the dialog.



// ========================================



// There are many ways to use the prompt feature:

// sign = window.prompt();

// sign = prompt();

// Open the window with Text "What is your name?"
// sign = window.prompt("What is your name?");

// Open the window with Text "What is your name?" and default value "Guest"
// sign = window.prompt("What is your name?", "Guest");



// ========================================



// let name = prompt("What is your name?", "Guest");

// console.log(name);



// ========================================



let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
    alert("Wow! I'm a Scorpio too!");
}



// ========================================