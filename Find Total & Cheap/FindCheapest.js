const phones = [
    { name: "Samsung", camera: 12, storage: "32gb", price: 36000, color: "silver", },
    { name: "Walton", camera: 10, storage: "32gb", price: 22000, color: "silver", },
    { name: "iphone", camera: 7, storage: "32gb", price: 82000, color: "silver" },
    { name: "Nokia", camera: 6, storage: "32gb", price: 44000, color: "golden" },
    { name: "HTC", camera: 10, storage: "32gb", price: 62000, color: "silver" },
];

function CheapestPhone(phone) {
    let cheapest = phone[0];
    for (let i = 0; i < phone.length; i++) {
        const element = phone[i];
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}

console.log(CheapestPhone(phones));