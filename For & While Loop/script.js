// Loops can execute a block of code as long as a specified condition is true.

// For Loop
var i;
for (i = 0; i < 10; i = i + 1) {
    if (i === 6) {
        break;
    }
    document.write(i + "<button>For Loop</button> <br>");
}



// While Loop
var i = 0;
while (i < 10) {
    document.write(i + "<button>While Loop</button> <br>");
    i = i + 1;
}



// Do While Loop
var i = 21;
do {
    document.write(i + "<button>Do While Loop</button> <br>");
    i = i + 1;
} while (i < 30);



// For Loop Over Array
var category = [
    "Automate",
    "Generate",
    "Development",
    "Translations",
    "Translate",
];
var i;
for (var i = 0; i < category.length; i = i + 1) {
    document.write(category[i] + "<br>");
}



// For In Loop Over Array
var category = [
    "Automate",
    "Generate",
    "Development",
    "Translations",
    "Translate",
];
for (var item in category) {
    document.write(category[item] + "<br>");
}



// For In Over Object
var Person = {
    name: "Kara",
    age: 28,
    city: "Karaman",
    height: "6 Feet",
};
for (var item in Person) {
    document.write(Person[item] + "<br>");
}



// For In Over String
var language = "Javascript";
for (var item in language) {
    document.write(language[item] + "<br>");
}