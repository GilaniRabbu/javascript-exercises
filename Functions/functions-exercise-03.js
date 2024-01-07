// Build a Triangle

// creates a line of * for a given length
function makeLine(length) {
    let line = "";

    for (var i = 1; i <= length; i++) {
        line += "* ";
    }

    return line + "\n";
}

function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNum = 1;

    for (lineNum = 1; lineNum <= length; lineNum++) {
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNum);
    }

    return triangle;
}

let Result = buildTriangle(10);
console.log(Result);



// ########################################



// Sort Array
function addAndSort(array, element) {
    array.push(element);
    return array.sort((a, b) => a - b);
}

console.log(addAndSort([5, 7, 1, 6], 3)); // Output [1, 3, 5, 6, 7]
console.log(addAndSort([15, 7, 2, 26], 10)); // Output [2, 7, 10, 15, 26]
console.log(addAndSort([25, 27, 21, 16], 19)); // Output [16, 19, 21, 25, 27]



// ########################################



function updateTemplateLiteral(petName, placeholder = "{NAME}") {
    const reminderTemplate = "{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
    return reminderTemplate.replace(new RegExp(placeholder, "g"), petName);
}

console.log(updateTemplateLiteral("Max"));
console.log(updateTemplateLiteral("Maria"));



// ########################################



// Return The Sum of All The Even Numbers In An Array
function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element % 2 === 0) {
            sum += element;
        }
    }

    return sum;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let resEven = sumEvenNumbers(num);
console.log(resEven); // 20



// ########################################



// Returns The Most Frequent Element In An Array
function mostFrequent(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequency[element] === undefined) {
            frequency[element] = 1;
        } else {
            frequency[element]++;
        }
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

var arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
var array = mostFrequent(arr);
console.log(array); // This will print 4 (since it occurs 4 times)

var Arr = ["apple", "banana", "apple", "apple", "cherry", "cherry", "date"];
var Arrays = mostFrequent(Arr);
console.log(Arrays); // This will print "apple" (since it occurs 3 times)



// ########################################



// Array Manipulation
function modifyArray(numbers, manipulationFunction) {
    let modifiedArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let modifiedElement = manipulationFunction(numbers[i]);
        modifiedArray.push(modifiedElement);
    }

    return modifiedArray;
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

let Numbers = [1, 2, 3, 4, 5];
let DoubledArray = modifyArray(Numbers, double);
let SquaredArray = modifyArray(Numbers, square);

console.log(DoubledArray); // This will print [2, 4, 6, 8, 10]
console.log(SquaredArray); // This will print [1, 4, 9, 16, 25]



// ########################################



// Array Element Finder
function findElement(arr, testFunction) {
    for (let i = 0; i < arr.length; i++) {
        if (testFunction(arr[i])) {
            return arr[i];
        }
    }
    return null;
}

function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1, 3, 5, 6, 7, 8];
let Results = findElement(numbers, isEven);
console.log(Results); // This will print 6 (the first even number in the array)



// ########################################



// Array Flattener
function flattenArray(arr) {
    let flattened = [];

    function flattenHelper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattenHelper(arr[i]);
            } else {
                flattened.push(arr[i]);
            }
        }
    }

    flattenHelper(arr);
    return flattened;
}

let nestedArray = [1, [2, [3]], 4];
let res = flattenArray(nestedArray);
console.log(res); // This will print [1, 2, 3, 4]



// ########################################



// Unique Array Merger
function mergeUniqueArrays(...arrays) {
    let mergedArray = [];

    for (let i = 0; i < arrays.length; i++) {
        mergedArray = mergedArray.concat(arrays[i]);
    }

    return Array.from(new Set(mergedArray));
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let arr3 = [3, 4, 5];

let result = mergeUniqueArrays(arr1, arr2, arr3);
console.log(result); // This will print [1, 2, 3, 4, 5]