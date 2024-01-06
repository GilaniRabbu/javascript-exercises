// Object-literal notation
var sister = {
    name: "Sarah",
    age: 23,
    parents: ["alice", "andy"],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true
};

var myObj = {
    color: "orange",
    shape: "sphere",
    type: "food",
    eat: function () { return "Yummy" }
};

myObj.eat(); // method
myObj.color; // property
console.log(myObj.eat());
console.log(myObj.color);



// Menu Items
let breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "sugar", "pancakes"]
}
console.log(breakfast);



// Bank Accounts 1
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function () {
        return "Welcome! Your balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};
console.log(savingsAccount.printAccountSummary());



var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function () {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    }
};
console.log(umbrella.open());



// Donuts Revisited
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function (donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
});



// Facebook Friends
let facebookProfile = {
    name: "Max",
    friends: 15,
    messages: ["Steel", "Drink", "Tro", "JO"],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function () {
        if (facebookProfile.friends > 0) {
            facebookProfile.friends = facebookProfile.friends - 1;
        }
    }
}
console.log(facebookProfile);