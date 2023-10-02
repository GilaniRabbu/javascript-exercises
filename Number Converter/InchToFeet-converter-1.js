function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    let perChair = 5;
    let perTable = 15;
    let perBed = 50;

    let totalChair = chairQuantity * perChair;
    let totalTable = tableQuantity * perTable;
    let totalBed = bedQuantity * perBed;

    let totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}

let result = woodCalculator(1, 1, 1);

console.log("Total Number of Wood", result);