// "Truthy" এবং "Falsy" দুটি শব্দ হলো জাভাস্ক্রিপ্টের একটি মৌলিক অংশ
// যা অবজেক্টের মানের সত্য বা মিথ্যা হওয়ার পরিবর্তে বুঝার জন্য ব্যবহৃত হয়।

// Truthy হচ্ছে যে কোন মান যা সত্য হিসেবে বিবেচিত হয়।
// এটি যেমন object, string, number, array ইত্যাদি হতে পারে।
// যে কোন অবজেক্ট বা মান যা অসত্য হলে এটিকে "Falsy" বলা হয়।

// Falsy হচ্ছে যে কোন মান যা মিথ্যা হিসেবে বিবেচিত হয়।
// এটি হতে পারে false, null, 0, "", NaN (Not a Number), undefined, ইত্যাদি।

// Truthy এবং Falsy মানে হয় তাদের লজিকাল স্থানে ব্যবহার করা যেতে পারে।
// এটি শর্তাধীন বা অন্য কোন লজিকাল প্রসেসিং জাভাস্ক্রিপ্টে ব্যবহৃত হয়।

// In JavaScript, values are often evaluated in a Boolean context
// such as in conditional statements. Truthy and falsy values are terms
// used to describe the behavior of values when they are treated as Booleans.

// In a boolean context, values are considered either "truthy" or "falsy"
// A truthy value is a value that is considered true when encountered in a Boolean context,
// while a falsy value is considered false.

// Here's a list of falsy values in JavaScript:
// false: The boolean value false.
// 0: The number 0.
// '' or "": An empty string.
// null: Represents the absence of any object value.
// undefined: Represents an uninitialized variable or missing property.
// NaN: Stands for "Not a Number"

// All other values are considered truthy. This includes values like true,
// non-zero numbers, non-empty strings, objects, arrays, functions, etc.

if (0) {
    console.log("true");
} else {
    console.log("false");
}

let myVariable = { age: 25 };

if (myVariable) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}