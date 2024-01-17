// let arr = [12, 10, 8, ["A", "B"], 5, 15];
// console.log(arr[3][0]);

// let array = [12, 10, 8, ["A", [20, 30], "B"], 5, 15];
// console.log(array[3]);
// console.log(array[3][1]);

// let obj = [1, 2, 3, { age: 25, city: "Kara" }];
// console.log(obj[3]);
// console.log(obj[3]["city"]);

// var arraysInArrays = [[1, 2, 3], ["Hakim", "Nav"], [true, false, null, undefined]];
// console.log(arraysInArrays[0][1]);



// Splice
let Colors = ['Red', 'Orange', 'Blackberry', 'Blue'];
Colors.splice(0, 1, 'Yellow', 'Green');
Colors.splice(4, 0, 'Purple');
console.log(Colors);

// Concat
let con = ['star', 'moon', 'sun'];
let cat = ['water', 'stone', 'wood'];
let concat = con.concat(cat);
console.log(concat);

// From
let from = Array.from("Golden Horde");
console.log(from);

// Filter
var numArray = [30, 32, 42, 48, 56, 60, 80, 90];
var filter = numArray.filter(function (item) {
    return item > 50;
});
console.log(filter);

// Find
var numArrays = [30, 32, 42, 48, 56, 60, 80, 90];
var find = numArrays.find(function (value) {
    return value > 35;
});
console.log(find);

// FindIndex
var numArr = [30, 32, 42, 48, 56, 60, 80, 90];
var findIndex = numArr.findIndex(function (val) {
    return val > 45;
});
console.log(findIndex);

// Includes
var NumArray = [30, 32, 40, 55, 60, 80, 90];
console.log(NumArray.includes(60));

// IndexOf
var NumArrays = [30, 32, 40, 55, 60, 80, 90];
console.log(NumArrays.indexOf(60));

// Pop Push Reverse Slice
let cut = [1, 2, 3, 4, 5, 6, 7];
let Cut = cut.slice(2, 4);
cut.pop();
cut.push(11);
cut.reverse();
console.log(cut);
console.log(Cut);

// Sort
var Sort = [55, 60, 80, 30, 32, 40, 90];
console.log(Sort.sort());

// Shift
// Shift remove 1 element from the start
var Shift = [1, 2, 3, 4, 5, 6, 7];
Shift.shift()
console.log(Shift);

// Unshift
// Unshift add 1 element from the start
var Un = [1, 2, 3, 4, 5, 6, 7];
Un.unshift(0)
console.log(Un);



// Quid Cup
var teams = ["Wood", "Galaxy", "Ball", "Spin", "Sea", "West", "East"];
function hasEnoughTeam(arrayInstance) {
    if (arrayInstance.length >= 7) {
        return true;
    } else {
        return false;
    }
}
console.log(hasEnoughTeam(teams));



// Array forLoop forEach
let donuts = ["jelly donut", "chocolate donut", "glazed donut"];
for (let i = 0; i < donuts.length; i++) {
    let element = donuts[i];
    element += " gold";
    element = element.toUpperCase();
    console.log(element);
}

donuts.forEach(function (donut) {
    donut += " blue";
    donut = donut.toUpperCase();
    console.log(donut);
});

let words = ["cat", "in", "hat"];
words.forEach(function (word, count, all) {
    console.log("Word " + count + " in " + all.toString() + " is " + word);
});



// Array Divisible Loop
let Test = [12, 17, 27, 43, 60, 67, 78, 85, 118, 123, 135, 148, 202, 254, 270];
Test.forEach(function (item, index) {
    if (item % 3 === 0) {
        Test[index] = Test[index] + 100;
    } else {
        console.log(`Element ${item} is not divisible by 3`);
    }
});
console.log(Test);



// Map
let mapArray = [1, 2, 3, 4, 5, 6, 7];
let MapArray = mapArray.map(function (elem) {
    elem = elem + 100;
    return elem;
});
console.log(MapArray);

var Donuts = ["jelly donut", "chocolate donut", "glazed donut"];
var improvedDonuts = Donuts.map(function (donut) {
    donut += " red";
    donut = donut.toUpperCase();
    return donut;
});
console.log(improvedDonuts);



// Qs. Create an array to store companies -> ["Microsoft", "Uber", "Google", "IBM", "Twitter"]
// 1. Remove the first company from the array
// 2. Remove Uber & Add Meta in its place
// 3. Add Amazon at the end
let companies = ["Microsoft", "Uber", "Google", "IBM", "Twitter"];

companies.splice(1, 1, "Meta");
console.log(companies);

companies.shift();
console.log(companies);

companies.push("Amazon");
console.log(companies);