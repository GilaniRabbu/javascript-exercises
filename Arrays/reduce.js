const products = [
    { id: 1, title: "Laptop", price: 999 },
    { id: 2, title: "Monitor", price: 199 },
    { id: 3, title: "Keyboard", price: 49 },
    { id: 4, title: "Mouse", price: 25 },
    { id: 5, title: "USB Cable", price: 15 },
];

// Task 1: Total Prices Greater Than 50
// Question: Calculate the total price of products where the price is greater than 50.
const totalPrice = products
    .filter(product => product.price > 50) // Filter products with price > 50
    .reduce((sum, product) => sum + product.price, 0); // Sum the prices of the filtered products

console.log(totalPrice);



// Task 2: Top 3 Expensive Product Total Price
// Question: Calculate the total price of the top 3 expensive products.
const totalTop_3 = products
    .sort((a, b) => b.price - a.price) // Sort products by price in descending order
    .slice(0, 3) // Take the top 3 products
    .reduce((sum, product) => sum + product.price, 0); // Sum their prices

console.log(totalTop_3);



// Task 3: Implement 10% Discount on Total Price
// Question: Implement a 10% discount on the total price of products greater than 50.
const totalWithDiscount = products
    .filter(product => product.price > 50) // Filter products with price > 50
    .reduce((sum, product) => sum + product.price, 0) * 0.9; // Calculate total and apply 10% discount

console.log(totalWithDiscount);



// Task 4: Modify Object Using Spread Operator
// Question: Modify an object by adding a new property using the spread operator.
const product = { id: 1, title: "Laptop", price: 999 };

const updatedProduct = {
    ...product, // Spread the properties of the original object
    stock: 50, // Add a new property
};

console.log(updatedProduct);
// Output: { id: 1, title: "Laptop", price: 999, stock: 50 }



// Task 5: Destructure Properties from an Object
// Question: Use destructuring to extract properties from an object and log them to the console.
const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "+123456789",
    address: "Eastern High Command"
};

// Destructure properties from the object
const { name, email, contact, address } = data;

// Log the extracted properties
console.log(name);
console.log(email);
console.log(contact);
console.log(address);