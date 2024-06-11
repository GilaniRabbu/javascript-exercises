const shoppingCart = [
    { name: "Shoe", price: 2000, quantity: 4 },
    { name: "Shirt", price: 1700, quantity: 3 },
    { name: "Pant", price: 1200, quantity: 7 },
    { name: "Belt", price: 1000, quantity: 6 },
];

function TotalCost(products) {
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let productTotal = product.price * product.quantity;
        sum += productTotal;
    }

    return sum;
}

const expense = TotalCost(shoppingCart);

console.log(`Total Expense Today ${expense}`);