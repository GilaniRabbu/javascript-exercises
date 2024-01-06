// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// The default Keyword
// The default keyword specifies the code to run if there is no case match

// The `switch` statement is used to perform different actions based on different conditions.
// In this specific code, it is used to determine the grade based on the value of the `marks` variable.
// It checks the value of `marks` against different conditions and executes
// the corresponding code block when a condition is met.

var marks = 100;

switch (true) {
    case (marks <= 100 && marks >= 80):
        document.write('A+');
        break;

    case (marks < 80 && marks >= 70):
        document.write('A');
        break;

    case (marks < 70 && marks >= 60):
        document.write('A-');
        break;

    case (marks < 60 && marks >= 50):
        document.write('B');
        break;

    case (marks < 50 && marks >= 40):
        document.write('C');
        break;

    case (marks < 40 && marks >= 30):
        document.write('D');
        break;

    default:
        document.write('F+');
}