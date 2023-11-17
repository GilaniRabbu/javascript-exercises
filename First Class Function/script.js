// First Class Function

// "First-class function" হলো একটি প্রোগ্রামিং ভাষার বৈশিষ্ট্য
// যা অন্য উপাদানের মতো ফাংশনকে একটি মান হিসেবে ব্যবহার করতে পারে
// এবং তা ফাংশনের থাকার পরিবর্তে যে কোন অন্য উপাদান করার মতো ব্যবহৃত হতে পারে।

// একটি ভাষার ফাংশন যদি ফাংশনের থাকে, তাদের বৈশিষ্ট্যগুলি এইভাবে বলা হয়:
// - ফাংশনকে একটি ভ্যালু হিসেবে ব্যবহার করা যেতে পারে।
// - ফাংশনকে অন্য ফাংশনের প্যারামিটার হিসেবে পাঠানো যেতে পারে।
// - ফাংশনকে অন্য ফাংশনের মধ্যে রিটার্ন করা যেতে পারে।

// এই গুলি কোন প্রোগ্রামিং ভাষার উপাদান হিসেবে থাকার জন্য সাধারণ হলেও,
// জাভাস্ক্রিপ্ট ফাংশনগুলি এই বৈশিষ্ট্যগুলি সম্পন্ন করে। এতে ফাংশনগুলি ভ্যালু হিসেবে পাস করা,
// প্রোগ্রামে ফাংশনের স্থানে ফাংশনকে পাস করা,
// এবং একটি ফাংশন থেকে অন্য ফাংশন ফিরে পাঠানো যেতে পারে।

// এই বৈশিষ্ট্যের কারণে জাভাস্ক্রিপ্টে ফাংশনগুলি হলো "First-class function"।
// এটি প্রোগ্রামিং ভাষা ডিজাইনে একটি গুরুত্বপূর্ণ সুযোগ তৈরি করে
// যা দিয়ে ফাংশনগুলি ভ্যালু হিসেবে ব্যবহার করা যেতে পারে।

// In JavaScript, functions are first-class citizens, which means they can be
// treated like any other value, such as numbers, strings, or objects.
// This property allows functions to be assigned to variables,
// passed as arguments to other functions, returned as values from other functions,
// and stored in data structures.



// Example 1: Assigning a function to a variable
function Greet(name) {
    return "My Name is " + name + "!";
}

let NameFunction = Greet;

let CreateName = NameFunction("Max");

console.log(CreateName);



// Example 2: Passing a function as an argument
function Message(messageFunction) {
    let msg = messageFunction();
    console.log(msg);
}

function createMessage() {
    return "The New Update is Here!";
}

Message(createMessage);



// Example 3: Returning a function from a function
function firstFunction(extract) {
    return function (num) {
        return num * extract;
    }
}

let Double = firstFunction(5);

let Triple = firstFunction(3);

console.log(Double(3));

console.log(Triple(5));